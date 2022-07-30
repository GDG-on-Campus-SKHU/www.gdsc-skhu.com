import { Head, Html, Main, NextScript } from 'next/document';

const URL = 'www.gdsc-skhu.com';
const TITLE = 'GDSC at SKHU';
const DESCRIPTION = 'Google developer student clubs at SKHU';
const IMAGE = '/gdsc_skhu.png';

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />

        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="development,developer,gdsc,google" />
        <link rel="canonical" href={URL} />
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:url" content={URL} />

        <meta name="twitter:creator" content="GDSC_AT_SKHU" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
