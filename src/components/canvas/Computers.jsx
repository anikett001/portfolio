import { Suspense, useState, useEffect} from 'react'
import { Canvas} from"@react-three/fiber"
import {OrbitControls, Preload, useGLTF} from "@react-three/drei" // imp for three.js
import CanvasLoader from "../Loader"


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={3.15} 
      groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight 
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize = {1024}
      />
      <primitive 
      object={computer.scene}
      scale = {isMobile ? 0.6 : 0.75}
      position = {isMobile ? [0,-3, -2.2] : [0, -3.25, -1.5]}
      rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listner for changes tothe screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the "isMobile"
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }
    // Add the callback function as a listener for the changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //Remove the listner when the computer is unmounted
    return ()=>{
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas 
    frameloop='demand'
    shadows          
    camera={{position: [20 , 3 ,5], fov: 25}} // -> [x-axis, y-axis, z-axis] , feal of view (fov)
    gl={{preserveDrawingBuffer: true}} 
    // Most imp In 3d Object
    >
      <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls
        enableZoom = {false}
        maxPolarAngle={Math.PI / 2} // rotate img in specific angle
        minPolarAngle={Math.PI / 2} // rotate img in specific angle
        />
        <Computers isMobile = {isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas 
