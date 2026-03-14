import { Planner } from "./core/planner.js";
import { PlanValidator } from "./core/validator.js";
import { ExecutionEngine } from "./core/executor.js";
import { ToolRegistry } from "./tools/registry.js";
import { Metrics } from "./core/metrics.js";
import { Synthesizer } from "./core/synth.js";

export function createNexus() {

  const planner = new Planner();
  const validator = new PlanValidator();

  const registry = new ToolRegistry();

  const metrics = new Metrics();
  const synth = new Synthesizer();

  registry.register("analyze", {
    async run(params) {
      return `Analysis of: ${params.input}`;
    }
  });

  registry.register("synthesize", {
    async run() {
      return "Final synthesis complete";
    }
  });

  const executor = new ExecutionEngine(registry);

  return {

    planner,
    validator,
    executor,

    async run(task) {

      const plan = planner.plan(task);

      validator.validate(plan);

      const results = await executor.execute(plan);

      const final = synth.synthesize(results);

      const stats = metrics.summary();

      return {
        message: "Execution complete",
        plan,
        results,
        final,
        metrics: stats
      };

    }

  };

}
