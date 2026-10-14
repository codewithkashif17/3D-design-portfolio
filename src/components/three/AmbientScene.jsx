import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * GoldParticles — a slowly drifting field of gold points, standing in for
 * "stars" in the obsidian void behind the cube.
 */
function GoldParticles({ count = 700 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4af37"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.55}
      />
    </points>
  );
}

/** FloatingRing — a slowly tumbling torus that echoes the cube motif in gold wireframe. */
function FloatingRing() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.x = t * 0.12;
    ref.current.rotation.y = t * 0.08;
    ref.current.position.y = Math.sin(t * 0.4) * 0.6;
  });
  return (
    <mesh ref={ref} position={[6, 0, -6]} scale={2.2}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshBasicMaterial color="#f2cf6b" transparent opacity={0.35} wireframe />
    </mesh>
  );
}

export default function AmbientScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#0b0d12']} />
        <ambientLight intensity={0.4} />
        <GoldParticles />
        <FloatingRing />
      </Canvas>
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
    </div>
  );
}
