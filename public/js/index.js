import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer;

main();

async function main() {
  init();
  render();
  loadModel("/assets/Cesium_Air.glb");
}

function init() {
  const canvReference = document.getElementById("container_canvas");
  camera = new THREE.PerspectiveCamera(
    45,
    canvReference.width / canvReference.height,
    1,
    1000
  );
  camera.position.set(15, 15, 15);

  const ambientLight = new THREE.AmbientLight(0x404040);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);

  scene = new THREE.Scene();
  scene.add(ambientLight);
  scene.add(directionalLight);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvReference,
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render); // use if there is no animation loop
  controls.minDistance = 2;
  controls.maxDistance = 40;
  controls.target.set(0, 0, 0);
  controls.update();
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

function loadModel(model_path) {
  const loader = new GLTFLoader();
  loader.load(model_path, function (gltf) {
    scene.add(gltf.scene);
    render();
  });
}
