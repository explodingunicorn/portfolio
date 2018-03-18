import * as WHS from 'whs';
import * as THREE from 'three';
import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {

  componentDidMount() {
    if (typeof document === 'undefined') {
      global.document = {
        createElement: () => null,
      };
    }

    const app = new WHS.App([
      new WHS.ElementModule(), // Apply to DOM.
      new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.
    
      new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
        position: new THREE.Vector3(0, 0, 50)
      })),
    
      new WHS.RenderingModule({bgColor: 0x162129}), // Apply THREE.WebGLRenderer
      new WHS.ResizeModule() // Make it resizable.
    ]);
    
    app.start();
  }

  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}

export default IndexPage
