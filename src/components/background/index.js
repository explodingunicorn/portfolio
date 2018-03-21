import React, { Component } from 'react';
import AnimBackground from '../../animation-background';
import './background.scss';

const animBackground = new AnimBackground();

class Background extends Component {
  componentDidMount() {
    animBackground.start();
    animBackground.addIcosahedron();
  }

  render() {
    return <div id="background">{this.props.children}</div>
  }
}

export default Background;