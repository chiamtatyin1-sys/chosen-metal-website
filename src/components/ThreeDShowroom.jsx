import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, MeshReflectorMaterial } from '@react-three/drei';
import { Suspense } from 'react';

function MetalParts() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-1.5, 0.5, 0]} castShadow>
          <boxGeometry args={[1.2, 0.15, 0.8]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[1.2, 0.3, 0.5]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
          <meshStandardMaterial color="#4a5568" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.1} floatIntensity={0.4}>
        <mesh position={[0, 0.6, -0.8]} castShadow>
          <boxGeometry args={[0.8, 0.5, 0.3]} />
          <meshStandardMaterial color="#2d3748" metalness={0.85} roughness={0.15} />
        </mesh>
      </Float>

      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[3, 64]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>

      <ContactShadows position={[0, -0.09, 0]} opacity={0.6} scale={10} blur={2} far={4} />
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#1a365d" wireframe />
    </mesh>
  );
}

export default function ThreeDShowroom() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0a' }}>
      <Canvas
        shadows
        camera={{ position: [4, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4cc9f0" />
          
          <MetalParts />
          
          <Environment preset="city" />
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={12}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
