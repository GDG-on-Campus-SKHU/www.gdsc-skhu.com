import Link from 'next/link';
import { css } from '@emotion/react';

import { layoutCss } from '../../styles/constants/layout';

const GDSC_LINK = 'https://gdsc.community.dev/';

export default function Nav() {
  return (
    <nav
      css={css`
        ${layoutCss};
        height: 60px;

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
          <h1
            css={css`
              line-height: 1.25rem;
            `}
          >
            Google Developer Student Clubs
            <br />
            at SKHU
          </h1>
        </a>
      </Link>

      <div>
        <a href={GDSC_LINK} target="_blank" rel="noreferrer">
          GDSC
        </a>
      </div>
    </nav>
  );
}
