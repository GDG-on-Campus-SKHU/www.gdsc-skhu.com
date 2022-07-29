import { PropsWithChildren, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Rig({ children }: PropsWithChildren<{}>) {
  const ref = useRef<THREE.Group>(null);

  useFrame(state => {
    if (!ref.current) return;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );

    ref.current!.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });

  return <group ref={ref}>{children}</group>;
}
