/**
 * NEXUS Synthesizer
 * Combines step outputs into a final result.
 */

export class Synthesizer {

  synthesize(results) {

    const ordered = Object.keys(results)
      .sort((a, b) => Number(a) - Number(b))
      .map(id => results[id]);

    return ordered.join("\n\n");

  }

}
