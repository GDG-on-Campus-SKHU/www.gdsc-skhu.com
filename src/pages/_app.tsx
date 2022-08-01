import type { AppProps } from 'next/app';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Scene from '../components/Scene';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Scene />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
