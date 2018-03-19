import * as WHS from 'whs';
import * as THREE from 'three';

class Background {
  constructor() {
    this.app = new WHS.App([
      new WHS.ElementModule(), // Apply to DOM.
      new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.
    
      new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
        position: new THREE.Vector3(0, 0, 5)
      })),
    
      new WHS.RenderingModule({bgColor: 0x162129}), // Apply THREE.WebGLRenderer
      new WHS.ResizeModule() // Make it resizable.
    ]);

    this.shapes = [];
  }

  start() {
    //this.app.manager.get('camera').native.lookAt({x: 0, y: 0, z: 0});
    // lights

    new WHS.AmbientLight({
      color: 0xFF0000,
      intensity: 0.1
    }).addTo(this.app);

    new WHS.DirectionalLight({
      color: 0xFFFFFF,
      intensity: 0.3,
    
      position: [10, 20, 10]
    }).addTo(this.app);

    this.app.start();

    const shapes = this.shapes;

    new WHS.Loop(() => {
      for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].rotation) {
          shapes[i].rotation.y += 0.02;
          shapes[i].rotation.x += 0.02;
        }
      }
    }).start(this.app);
  }

  addIcosahedron() {
    const icosahedron = new WHS.Dodecahedron({
      geometry: {
        radius: 2,
        detail: 1
      },
    
      material: new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,
      }),

      position: [0, 0, 0]
    })

    icosahedron.addTo(this.app);

    this.shapes.push(icosahedron);
    console.log(this.app);
  }
}

export default Background;