#!/usr/bin/env node

import { createNexus } from "../src/index.js";

const args = process.argv.slice(2);

const dryRun = args.includes("--dry-run");
const taskParts = args.filter(a => a !== "--dry-run");
const task = taskParts.join(" ");

if (!task) {
  console.log("Wazulu Nexus");
  console.log("Deterministic AI Execution Engine\n");
  console.log("Usage:");
  console.log('  nexus "task"');
  console.log('  nexus "task" --dry-run');
  process.exit(0);
}

console.log("Wazulu Nexus\n");

const nexus = createNexus();

if (dryRun) {

  const plan = nexus.planner.plan(task);
  nexus.validator.validate(plan);

  console.log("Execution Plan\n");

  for (const step of plan.steps) {

    const deps = step.dependsOn?.length
      ? `depends on: ${step.dependsOn.join(",")}`
      : "root";

    console.log(`${step.id}  ${step.tool}  ${deps}`);
  }

  process.exit(0);
}

console.log("Running task:", task, "\n");

try {

  const result = await nexus.run(task);

  console.log("Result:\n");
  console.log(JSON.stringify(result, null, 2));

} catch (err) {

  console.error("Execution failed:");
  console.error(err.message);

}
