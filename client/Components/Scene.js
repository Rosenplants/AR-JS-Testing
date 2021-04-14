/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Scene() {
  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; debugUIEnabled: false"
      id="scene"
    >
      <a-box
        rotation="0 0 0"
        color="#4CC3D9"
        scale="1 1 1"
        gps-entity-place="latitude: 40.7783511; longitude: -73.9474423;"
        id="box-1"
      ></a-box>
      <a-box
        rotation="0 0 0"
        color="#4CC3D9"
        scale="1 1 1"
        gps-entity-place="latitude: 40.7784446; longitude: -73.9477199;"
        id="box-2"
      ></a-box>
      <a-box
        rotation="0 0 0"
        color="#4CC3D9"
        scale="1 1 1"
        gps-entity-place="latitude: 40.778177; longitude: -73.948127;"
        id="box-3"
      ></a-box>
      <a-box
        rotation="0 0 0"
        color="#4CC3D9"
        scale="1 1 1"
        gps-entity-place="latitude: 40.777474; longitude: -73.9462704;"
        id="box-4"
      ></a-box>
      <a-box
        rotation="0 0 0"
        color="#4CC3D9"
        scale="1 1 1"
        gps-entity-place="latitude: 40.777474; longitude: -73.9462704;"
        id="box-5"
      ></a-box>
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  );
}
