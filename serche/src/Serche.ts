import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const renderer = new WebGLRenderer();
const camera = new PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
const scene = new Scene();

camera.position.z = 20;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener("event", function( ) {
    renderer.setSize( window.innerWidth, window.innerHeight );
});

function createCube() {
    const cubeGeo = new BoxGeometry(  5, 5, 5);
    const cubeMat = new MeshBasicMaterial( { color: 0xFF0000 });
    const cubeMesh = new Mesh( cubeGeo, cubeMat );
    cubeMesh.name = "cube";
    scene.add(cubeMesh);
}

createCube();

function animate() {
    requestAnimationFrame(animate);
    const cube = scene.getObjectByName("cube");
    cube!.rotation.x += 0.01;
    cube!.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();