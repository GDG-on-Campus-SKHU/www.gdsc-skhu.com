import { css } from '@emotion/react';

import { layoutCss } from '../../styles/constants/layout';

export default function Footer() {
  return (
    <footer
      css={css`
        width: 100%;
        background-color: lightgray;
        z-index: 100;
      `}
    >
      <div
        css={css`
          ${layoutCss}
          height: 100px;
        `}
      >
        footer
      </div>
    </footer>
  );
}
