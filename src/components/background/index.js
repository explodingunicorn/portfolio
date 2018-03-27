import React, { Component } from 'react';
import d3background from './d3';
import './background.scss';

const background = new d3background();

class Background extends Component {
  componentDidMount() {
    background.start();
  }

  render() {
    return (
      <svg 
        id="d3-background"
        style={
          {
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 1
          }
        }
      />
    )
  }
}

export default Background;