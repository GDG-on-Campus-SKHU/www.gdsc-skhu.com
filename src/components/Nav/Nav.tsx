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
      <Link href="/" scroll={false}>
        <a>
          <h1
            css={css`
              line-height: 1.25rem;
            `}
          >
            Google Developer Student Clubs SKHU
          </h1>
        </a>
      </Link>

      <div
        css={css`
          display: flex;
          gap: 0.75rem;
        `}
      >
        <a href={GDSC_LINK} target="_blank" rel="noreferrer">
          About
        </a>
        <Link href="/contact" scroll={false}>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
}
