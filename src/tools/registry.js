export class ToolRegistry {

  constructor() {
    this.tools = new Map();
  }

  register(name, tool) {
    this.tools.set(name, tool);
  }

  get(name) {
    const tool = this.tools.get(name);

    if (!tool) {
      throw new Error(`Unknown tool: ${name}`);
    }

    return tool;
  }

}
