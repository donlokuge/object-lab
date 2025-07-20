import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SceneObject, SceneObjectMesh } from './SceneObjectMesh';

export const SceneCanvas = ({ objects=[] }: { objects: SceneObject[] }) => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {objects.map((obj) => (
        <SceneObjectMesh key={obj.id} object={obj} />
      ))}
    </Canvas>
  );
};
