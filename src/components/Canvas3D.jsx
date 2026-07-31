import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#9b87f5"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Canvas3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} color="#6B8EAD" intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
