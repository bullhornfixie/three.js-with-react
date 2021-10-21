# Three.js with React 

## Project setup (core dependencies)
- npx create-react-app my-app 
- npm i three 

## Run code 
- clone repo in terminal 
- npm i
- npm start 

## About Three.js 
- Library for drawing 3D graphics in browser with JS + WebGL
- Not a tool for modelling or drawing 3D shapes 
- For this we use `blender` and you can import 3D models

## Canvas 
- `<Canvas id="scene" width="200" height="100"> </Canvas>`
- A canvas is a rectangular area on an HTML page
- Used to draw grapics, on the fly, in JavaScript
- By default a canvas has no border and no content 
- Always specify an `id` attribute (to be referred to in a script)
- https://www.w3schools.com/html/html5_canvas.asp

## .domElement
- A canvas where the renderer draws its output 
- The canvas is automatically created by the renderer in the constructor 
- `const renderer = new THREE.WebGLRenderer()`
- `renderer.domElement`
- Here we are creating an instance of WebGLRenderer and accessing canvas property 
- Basically draw + create a canvas to draw on 

## document.body 
- `document.body` represents the <body> of the current document 
- `document.body.appendChild( canvas )`
- Append means to add something to the end of a written document
- This is essentially `parentNode.appendChild(childNode)`



