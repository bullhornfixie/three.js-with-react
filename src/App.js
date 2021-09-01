import React, { Component } from "react";
import * as THREE from "three";
import './style.css';

class App extends Component {
  componentDidMount() {
    
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

    // Camera 
    const sizes = { 
      width: window.innerWidth, // sets width to browser window
      height: window.innerHeight
    }   

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5

    // Render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( sizes.width, sizes.height );
    document.body.appendChild( renderer.domElement );

    // Animate 
    const animate = () => {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
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
