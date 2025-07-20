import { ThreeElements } from '@react-three/fiber';

type MeshProps = ThreeElements['mesh'];

type Vector3 = { x: number; y: number; z: number };

export interface SceneObject {
  id: string;
  type: 'cube' | 'sphere';
  position: Vector3;
  scale: Vector3;
  color: string;
}

export const SceneObjectMesh = ({ object }: { object: SceneObject }) => {
  const position: MeshProps['position'] = [
    object.position.x,
    object.position.y,
    object.position.z,
  ];
  const scale: MeshProps['scale'] = [
    object.scale.x,
    object.scale.y,
    object.scale.z,
  ];

  return (
    <mesh position={position} scale={scale}>
      {object.type === 'cube' ? (
        <boxGeometry />
      ) : (
        <sphereGeometry args={[0.5, 32, 32]} />
      )}
      <meshStandardMaterial color={object.color} />
    </mesh>
  );
};
