import { OrbitControls, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      } `}
    >
      <ambientLight intensity={0.3}></ambientLight>
      <perspectiveCamera makeDefault position={[0, 0, 4]}></perspectiveCamera>
      <Lights></Lights>
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      ></OrbitControls>

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large' `}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader></Loader>}> </Suspense>
      </group>
      <IPhone
        scale={index === 1 ? [20, 20, 20] : [25, 25, 25]}
        item={item}
        size={size}
      ></IPhone>
    </View>
  );
};

export default ModelView;
