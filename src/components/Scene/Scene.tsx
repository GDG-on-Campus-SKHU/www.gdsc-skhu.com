import { Suspense, useRef } from 'react';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { colors } from '../../styles/constants';
import Pill from '../common/Pill';
import Rig from '../common/Rig';

export default function Scene() {
  return (
    <>
      <pointLight position={[100, 100, 100]} intensity={0.8} />
      <hemisphereLight
        color="#ffffff"
        groundColor="#b9b9b9"
        position={[-7, 25, 13]}
        intensity={0.85}
      />
      <OrbitControls enableZoom={false} />

      <Suspense fallback={null}>
        <group position={[0, 10, 0]}>
          <Rig>
            <Pills />
          </Rig>

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={1}
            width={100}
            height={100}
            blur={0.7}
            far={100}
          />
        </group>
      </Suspense>
    </>
  );
}

function Pills() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(state => {
    groupRef.current?.children.forEach((child, index) => {
      child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50;
      child.rotation.x += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000;
      child.rotation.y += (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000;
      child.rotation.z += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000;
    });
  });

  return (
    <group ref={groupRef} dispose={null}>
      <Pill color={colors.gdscRed} position={[-17.4, -1.96, -6.21]} rotation={[0, 20, 2.23]} />
      <Pill color={colors.gdscBlue} position={[-4.8, -16.96, 2.16]} rotation={[0, 0.91, -2.1]} />
      <Pill
        color={colors.gdscYellow}
        position={[30.9, -12.6, -17.01]}
        rotation={[0, 0.32, -0.86]}
      />
      <Pill color={colors.gdscGreen} position={[13.22, 5.99, 0.03]} rotation={[0, -0.23, 0.71]} />
    </group>
  );
}
