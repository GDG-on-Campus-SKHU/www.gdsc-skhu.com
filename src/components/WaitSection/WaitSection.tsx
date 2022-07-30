import { css } from '@emotion/react';

export default function WaitSection() {
  return (
    <section
      css={css`
        margin-top: 200px;
      `}
    >
      <h2
        css={css`
          text-align: center;
        `}
      >
        Core member 모집이 곧 시작됩니다.
      </h2>
    </section>
  );
}
