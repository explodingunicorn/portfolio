import React, { Component } from 'react';
import AnimBackground from '../../animation-background';

const animBackground = new AnimBackground();

class Background extends Component {
  componentDidMount() {
    animBackground.start();
    animBackground.addIcosahedron();
    animBackground.addIcosahedron();
  }

  render() {
    return <div/>
  }
}

export default Background;