import { css } from '@emotion/react';
import { Canvas } from '@react-three/fiber';

import Scene from '../components/Scene';
import WaitSection from '../components/WaitSection';
import { layoutCss } from '../styles/constants/layout';

export default function Root() {
  return (
    <>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
        `}
      >
        <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      <main
        css={css`
          margin-top: 100vh;
          background-color: rgba(255, 255, 255, 0.5);
          width: 100%;
          opacity: 1;
          backdrop-filter: blur(20px);
          box-shadow: 0px -4px 20px 6px rgba(104, 112, 118, 0.08);
        `}
      >
        <div
          css={css`
            ${layoutCss}
            padding-top: 64px;
            padding-bottom: 64px;
          `}
        >
          <WaitSection />
        </div>
      </main>
    </>
  );
}
