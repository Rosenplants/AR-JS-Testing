/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Scene() {
  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false"
      id="scene"
    >
      <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="#4CC3D9"
        gps-entity-place="latitude: 40.778270; longitude: -73.947310;"
      ></a-box>
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  );
}
