import { css } from '@emotion/react';

import { colors } from './colors';
import { mediaQuery } from './media';

export const paragraphCss = css`
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: ${colors.gray500};

  ${mediaQuery('xs')} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const bigCss = css`
  font-size: 5rem;
  font-weight: bold;
  line-height: 6rem;

  ${mediaQuery('xs')} {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;
