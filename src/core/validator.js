export class PlanValidator {
  validate(plan) {
    if (!plan.steps || plan.steps.length === 0) {
      throw new Error("Invalid plan: no steps");
    }

    const ids = new Set(plan.steps.map(s => s.id));

    for (const step of plan.steps) {
      if (!Array.isArray(step.dependsOn)) continue;

      for (const dep of step.dependsOn) {
        if (!ids.has(dep)) {
          throw new Error(`Invalid dependency: ${dep}`);
        }
      }
    }

    return true;
  }
}
