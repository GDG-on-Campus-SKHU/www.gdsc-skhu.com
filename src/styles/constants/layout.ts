import { css } from '@emotion/react';

export const layout = {
  maxWidth: '1080px',
  padding: '0 1rem',
} as const;

export const layoutCss = css`
  width: 100%;
  max-width: ${layout.maxWidth};
  padding: ${layout.padding};
  margin: 0 auto;
`;
