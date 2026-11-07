export interface HighlightParts {
  before: string;
  highlight: string;
  after: string;
}

/**
 * Splits a heading so one phrase can carry the gradient without changing the text.
 * Returns null when the phrase is missing, so callers fall back to the plain heading.
 */
export function splitHighlight(text: string, phrase?: string): HighlightParts | null {
  if (!phrase) return null;
  const index = text.indexOf(phrase);
  if (index === -1) return null;
  return {
    before: text.slice(0, index),
    highlight: phrase,
    after: text.slice(index + phrase.length),
  };
}
