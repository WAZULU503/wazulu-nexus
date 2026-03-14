/**
 * NEXUS Step Cache
 * Uses a deterministic key based on tool, params, and resolved inputs.
 */

export class StepCache {

  constructor() {
    this.store = new Map();
  }

  _generateKey(step, inputs) {
    return JSON.stringify({
      tool: step.tool,
      params: step.params,
      inputs
    });
  }

  get(step, inputs) {
    const k = this._generateKey(step, inputs);
    return this.store.get(k);
  }

  set(step, inputs, result) {
    const k = this._generateKey(step, inputs);
    this.store.set(k, result);
  }

}
