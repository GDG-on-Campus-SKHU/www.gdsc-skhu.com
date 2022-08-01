import { css } from '@emotion/react';

import { colors } from './colors';

/**
 * `color`, `background-color`,
 * `border-radius`, `box-shadow`
 * `flex center` 속성을 가지고 있음
 */
export const defaultButtonCss = css`
  color: ${colors.gray500};
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
