import { css } from '@emotion/react';
import { Canvas } from '@react-three/fiber';

import Scene from '../components/Scene';

export default function Root() {
  return (
    <div>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        `}
      >
        <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
