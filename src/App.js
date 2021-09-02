import React, { Component } from "react";
import * as THREE from "three";
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

console.log(OrbitControls)

class App extends Component {
  componentDidMount() {

    const gui = new dat.GUI({ closed: false, width: 400 })
    gui.domElement.id = 'gui';
    
    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();

    // Create object 
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00, 
      wireframe: true
    });

    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const parameters = {
      color: 0xff0000,
      spin: () => {
        gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 10})
      }
    }

    // Debug 
    gui
    .add(cube.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('elevation') 
    // .name is an optional label 

    gui
    .add(cube, 'visible')
    // creates a check box in close controls to make visible or invisible 

    gui
    .add(material, 'wireframe')
    // create a wireframe version 

    gui
    .addColor(parameters, 'color')
    .onChange(() => 
    {
    console.log(material.color.set(parameters.color))
    })

    gui
    .add(parameters, 'spin')

    // Sizes
    const sizes = { 
      width: window.innerWidth, 
      height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    const camera = new THREE.PerspectiveCamera( 75, sizes.width/sizes.height, 0.1, 1000 );
    camera.position.z = 3

    // Render
    const renderer = new THREE.WebGLRenderer();
    const canvas = renderer.domElement
    renderer.setSize( sizes.width, sizes.height );
    document.body.appendChild( canvas );

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Animate 
    const animate = () => {
     
      // Orbit Controls 
      controls.update()

      // Render 
      renderer.render( scene, camera );
      requestAnimationFrame( animate );
      
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />     
    )
  }
}

export default App;
