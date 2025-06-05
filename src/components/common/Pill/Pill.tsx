/** @jsxImportSource @emotion/react */
import { useGLTF } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';
import { BufferGeometry } from 'three';

import { MODELS } from '../../../constants/models';

interface Props {
  color: string;
  position: Vector3;
  rotation: Euler;
}

interface GLTFResult {
  nodes: {
    pSphere9: {
      geometry: BufferGeometry;
    };
  };
}

export default function Pill({ color, position, rotation }: Props) {
  const { nodes } = useGLTF(MODELS.PILL) as unknown as GLTFResult;

  return (
    <mesh
      geometry={nodes.pSphere9.geometry}
      position={position}
      rotation={rotation}
      scale={[5, 5, 5]}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
