import { log } from "../utils/logger.js";
import { StepCache } from "./cache.js";

/**
 * NEXUS Execution Engine
 * Handles parallel execution of the dependency graph with integrated caching.
 */

export class ExecutionEngine {

  constructor(registry) {
    this.registry = registry;
    this.results = new Map();
    this.cache = new StepCache();
  }

  async execute(plan) {

    const steps = plan.steps;

    const completed = new Set();
    const running = new Set();

    log("ENGINE", `Executing DAG with ${steps.length} steps...`);

    while (completed.size < steps.length) {

      const readySteps = steps.filter(step =>
        !completed.has(step.id) &&
        !running.has(step.id) &&
        (step.dependsOn || []).every(dep => completed.has(dep))
      );

      if (readySteps.length === 0 && running.size === 0) {
        throw new Error("[NEXUS_EXECUTION_STALL] Dependency deadlock detected.");
      }

      const tasks = readySteps.map(step =>
        this.runStep(step, completed, running)
      );

      await Promise.race(tasks);
    }

    log("ENGINE", "Execution complete.");

    return Object.fromEntries(this.results);
  }

  async runStep(step, completed, running) {

    running.add(step.id);

    const inputs = (step.dependsOn || []).map(id =>
      this.results.get(id)
    );

    const cached = this.cache.get(step, inputs);

    if (cached) {

      log(step.tool, "✓ cached");

      this.results.set(step.id, cached);

      running.delete(step.id);
      completed.add(step.id);

      return;
    }

    try {

      const start = Date.now();

      const tool = this.registry.get(step.tool);

      const result = await tool.run(step.params, inputs);

      const duration = Date.now() - start;

      log(step.tool, `✓ ${duration}ms`);

      this.cache.set(step, inputs, result);

      this.results.set(step.id, result);

      running.delete(step.id);
      completed.add(step.id);

    } catch (error) {

      log(step.tool, `✗ FAILED: ${error.message}`);

      throw error;

    }

  }

}
