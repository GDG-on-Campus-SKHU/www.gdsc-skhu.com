export const media = {
  xs: '650px',
  sm: '960px',
  md: '1280px',
  lg: '1400px',
  xl: '1920px',
} as const;

type MediaKey = keyof typeof media;

export function mediaQuery(maxWidth: number): string;

export function mediaQuery(mediaKey: MediaKey): string;

export function mediaQuery(prop: number | MediaKey) {
  if (typeof prop === 'number') return `@media (max-width: ${prop}px)`;

  return `@media (max-width: ${media[prop]})`;
}
