/**
 * NEXUS Metrics
 * Tracks execution timing and step statistics.
 */

export class Metrics {

  constructor() {
    this.startTime = Date.now();
    this.stepCount = 0;
    this.cacheHits = 0;
  }

  recordStep() {
    this.stepCount++;
  }

  recordCacheHit() {
    this.cacheHits++;
  }

  summary() {

    const totalTime = Date.now() - this.startTime;

    return {
      steps: this.stepCount,
      cacheHits: this.cacheHits,
      totalTime
    };

  }

}
