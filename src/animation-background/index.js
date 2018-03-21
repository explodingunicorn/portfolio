import * as WHS from 'whs';
import * as THREE from 'three';

class Background {
  constructor() {
    this.app = null;
  }

  start() {
    //this.app.manager.get('camera').native.lookAt({x: 0, y: 0, z: 0});
    this.app = new WHS.App([
      new WHS.ElementModule(document.getElementById('background')), // Apply to DOM.
      new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.
    
      new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
        position: new THREE.Vector3(0, 0, 10)
      })),
    
      new WHS.RenderingModule({bgColor: 0xFFFFFF}), // Apply THREE.WebGLRenderer
      new WHS.ResizeModule() // Make it resizable.
    ]);

    this.shapes = [];

    window.addEventListener('resize', () => {
      this.app.stop();
      this.app.start();
    })

    // lights
    new WHS.AmbientLight({
      color: 0xFFFFFF,
      intensity: 0.3
    }).addTo(this.app);

    new WHS.DirectionalLight({
      color: 0xFFFFFF,
      intensity: 1.0,
    
      position: [10, 20, 10]
    }).addTo(this.app);

    this.app.start();

    const shapes = this.shapes;

    new WHS.Loop(() => {
      for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].rotation) {
          shapes[i].rotation.y += 0.002;
        }
      }
    }).start(this.app);
  }

  addIcosahedron() {
    const icosahedron = new WHS.Icosahedron({
      geometry: {
        radius: 5,
        detail: 1
      },
    
      material: new THREE.MeshLambertMaterial({
        transparent: true,
        opacity: 0.8,
        color: 0x0B2027,
      }),

      position: [0, 0, 0]
    })

    console.log(-1 * (window.innerWidth/2));

    icosahedron.addTo(this.app);

    this.shapes.push(icosahedron);
    console.log(this.app);
  }
}

export default Background;