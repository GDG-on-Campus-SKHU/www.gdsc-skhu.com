import { css, Global } from '@emotion/react';

import { resetCss } from './resetCss';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  ${resetCss}

  :root {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    * {
      font-family: inherit;

      margin: 0;
      padding: 0;
      box-sizing: border-box;
      word-break: keep-all;
      word-wrap: break-word;
    }
  }
`;
