import Link from 'next/link';
import { css } from '@emotion/react';

import { layoutCss } from '../../styles/constants/layout';

export default function Nav() {
  return (
    <nav
      css={css`
        ${layoutCss};
        height: 50px;

        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
      `}
    >
      <Link href="/">
        <a>
          <h1>GDSC AT SKHU</h1>
        </a>
      </Link>

      <div>
        <Link href={'https://gdsc.community.dev/'}>
          <a>GDSC</a>
        </Link>
      </div>
    </nav>
  );
}
