import type { AppProps } from 'next/app';
import Head from 'next/head';
import { css } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Scene from '../components/Scene';
import { BASE_URL } from '../constants/common';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps, router }: AppProps) {
  const CURRENT_URL = BASE_URL + router.route;
  return (
    <>
      <Head>
        <link rel="canonical" href={CURRENT_URL} />
        <meta property="og:url" content={CURRENT_URL} />
      </Head>
      <GlobalStyle />

      <div
        css={css`
          width: 100vw;
          overflow-x: hidden;
        `}
      >
        <Nav />
        <Scene />

        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Component {...pageProps} key={CURRENT_URL} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
