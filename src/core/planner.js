export class Planner {
  plan(task) {
    return {
      task,
      steps: [
        {
          id: 1,
          tool: "analyze",
          params: { input: task },
          dependsOn: []
        },
        {
          id: 2,
          tool: "synthesize",
          params: {},
          dependsOn: [1]
        }
      ]
    };
  }
}
