import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Laptop = () => {
  const Laptop = useGLTF('./mac-air/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[10, 0, -30]}
        angle={0.15}
        penumbra={1}
        intensity={2000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={Laptop.scene}
        scale={10.5}
        position-y={-1}
        rotation-x={0}
      />
    </mesh>
  )
}

const LaptopCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       } }
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Laptop />
        </Suspense>
      </Canvas>
  )
}

export default LaptopCanvas;