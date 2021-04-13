/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import NavBar from './Statics/NavBar';
import Scene from './Scene';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>Hello World</h1>
        <Scene />
      </>
    );
  }
}
