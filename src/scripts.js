//bagian import
import * as THREE from "three";
import { MapControls, OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

import image from "./assets/WoodFloor051_4K_Color2.png";
import imageAmbientOcclusion from "./assets/WoodFloor051_1K_AmbientOcclusion.jpg";
import imageHeight from "./assets/WoodFloor051_1K_Displacement.jpg";
import imageRoughness from "./assets/WoodFloor051_1K_Roughness.jpg";
import imageNormal from "./assets/WoodFloor051_1K_NormalDX.jpg";
import image2 from "./assets/Fabric054_1K_Color.jpg";
import imageAmbientOcclusion2 from "./assets/Fabric054_1K_AmbientOcclusion.jpg";
import imageHeight2 from "./assets/Fabric054_1K_Displacement.jpg";
import imageRoughness2 from "./assets/Fabric054_4K_Roughness.jpg";
import imageNormal2 from "./assets/Fabric054_1K_NormalDX.jpg";
import image4 from "./assets/uasgrafkom6.png";
import image3 from "./assets/Facade018A_1K_Color.jpg";
import imageAmbientOcclusion3 from "./assets/Facade018A_1K_AmbientOcclusion.jpg";
import imageHeight3 from "./assets/Facade018A_1K_Displacement.jpg";
import imageRoughness3 from "./assets/Facade018A_1K_Roughness.jpg";
import imageNormal3 from "./assets/Facade018A_1K_NormalDX.jpg";

// bagian texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(image);
const textureAmbientOcclusion = textureLoader.load(imageAmbientOcclusion);
const textureHeight = textureLoader.load(imageHeight);
const textureRoughness = textureLoader.load(imageRoughness);
const textureNormal = textureLoader.load(imageNormal);


const textureLoader2 = new THREE.TextureLoader();
const texture2 = textureLoader2.load(image2);
const textureAmbientOcclusion2 = textureLoader2.load(imageAmbientOcclusion2);
const textureHeight2 = textureLoader2.load(imageHeight2);
const textureRoughness2 = textureLoader2.load(imageRoughness2);
const textureNormal2 = textureLoader2.load(imageNormal2);


const textureLoader3 = new THREE.TextureLoader();
const texture3 = textureLoader3.load(image3);
const textureAmbientOcclusion3 = textureLoader3.load(imageAmbientOcclusion3);
const textureHeight3 = textureLoader3.load(imageHeight3);
const textureRoughness3 = textureLoader3.load(imageRoughness3);
const textureNormal3 = textureLoader3.load(imageNormal3);


const textureLoader4 = new THREE.TextureLoader();
const texture4 = textureLoader3.load(image4);




//gui
const gui = new dat.GUI({ closed: true, width: 300 });


//deklarasi canvas dan scene
const canvas = document.querySelector(".result");
const scene = new THREE.Scene();


//light

const light = new THREE.PointLight(0xffffff, 1);
light.position.x = 0;
light.position.y = 0;
light.position.z = 30;
light.castShadow = true;
scene.add(light);


//bentuk tangga merah
const geometry = new THREE.BoxGeometry(0.5, 0.8, 12, 100, 100, 100);
const geometrydua = new THREE.BoxGeometry(48.5, 10, 3, 100, 100, 100);
const geometrytiga = new THREE.BoxGeometry(48.5, 10, 6, 100, 100, 100);
const geometryempat = new THREE.BoxGeometry(48.5, 10, 9, 100, 100, 100);
const geometrylima = new THREE.BoxGeometry(48.5, 10, 12, 100, 100, 100);
const geometryenam = new THREE.BoxGeometry(48.5, 10, 15, 100, 100, 100);
const geometrytujuh = new THREE.BoxGeometry(28.5, 2.3, 27, 100, 100, 100);



//bagian material
//material lantai,tiang,dan ring
const material = new THREE.MeshStandardMaterial({});
material.map = texture;
material.aoMap = textureAmbientOcclusion;
material.aoMapIntensity = 1;
material.displacementMap = textureHeight;
material.displacementScale = 0.001;
material.roughnessMap = textureRoughness;
material.normalMap = textureNormal;
material.normalScale.set(5, 5);



// material gambar tangga dan bola
const material2 = new THREE.MeshStandardMaterial({});
material2.map = texture2;
material2.aoMap = textureAmbientOcclusion2;
material2.aoMapIntensity = 1;
material2.displacementMap = textureHeight2;
material2.displacementScale = 0.001;
material2.roughnessMap = textureRoughness2;
material2.normalMap = textureNormal2;
material2.normalScale.set(5, 5);


//material untuk dinding
const material3 = new THREE.MeshStandardMaterial({});
material3.map = texture3;
material3.aoMap = textureAmbientOcclusion3;
material3.aoMapIntensity = 1;
material3.displacementMap = textureHeight3;
material3.displacementScale = 0.001;
material3.roughnessMap = textureRoughness3;
material3.normalMap = textureNormal3;
material3.normalScale.set(5, 5);


//untuk material gambar uas grafkom rizka gusnaini
const material4 = new THREE.MeshStandardMaterial({});
material4.map = texture4;


//bentuk bola
const geometry1 = new THREE.SphereGeometry(0.75, 64, 32);
const sphere = new THREE.Mesh(geometry1, material2);
sphere.position.x = 17.71;
sphere.position.y = -1.74;
sphere.position.z = 4;
sphere.castShadow = true;
scene.add(sphere);


//bentuk lantai
const plane = new THREE.Mesh(new THREE.PlaneGeometry(48, 24.5), material);
plane.position.x = -Math.PI * 0.5;
plane.position.y = -0.65;
plane.position.z = -9;
plane.receiveShadow = true;
scene.add(plane);



//bentuk ring basket sebelah kanan
const torus = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.2373, 16, 100), material);
torus.position.x = 17.8;
torus.position.y = -1.93;
torus.position.z = 3.05;
torus.castShadow = true;
scene.add(torus);


//bentuk ring basket sebelah kiri
const torus2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.2373, 16, 100), material);
torus2.position.x = -21.5;
torus2.position.y = -1.93;
torus2.position.z = 3.05;
torus2.castShadow = true;
scene.add(torus2);



//bentuk tiang sebelah kanan
const cube = new THREE.Mesh(geometry, material);
cube.position.z = -2.85;
cube.position.x = 19.5;
cube.position.y = -2.2;
cube.castShadow = true;
scene.add(cube);


//bentuk tiang sebelah kiri
const cubedua = new THREE.Mesh(geometry, material);
cubedua.position.z = -2.85;
cubedua.position.x = -23;
cubedua.position.y = -2.2;
cubedua.castShadow = true;
scene.add(cubedua);


//tangga 
const cube2 = new THREE.Mesh(geometrydua, material2);
cube2.position.z = -8;
cube2.position.x = -1.5;
cube2.position.y = 14;
cube2.receiveShadow = true;
scene.add(cube2);


//tangga
const cube3 = new THREE.Mesh(geometrytiga, material2);
cube3.position.z = -8;
cube3.position.x = -1.5;
cube3.position.y = 16;
cube3.receiveShadow = true;
scene.add(cube3);


//tangga
const cube4 = new THREE.Mesh(geometryempat, material2);
cube4.position.z = -8;
cube4.position.x = -1.5;
cube4.position.y = 18;
cube4.receiveShadow = true;
scene.add(cube4);


//tangga
const cube5 = new THREE.Mesh(geometrylima, material2);
cube5.position.z = -8;
cube5.position.x = -1.5;
cube5.position.y = 20;
cube5.receiveShadow = true;
scene.add(cube5);


//tangga
const cube6 = new THREE.Mesh(geometryenam, material2);
cube6.position.z = -8;
cube6.position.x = -1.5;
cube6.position.y = 22;
cube6.receiveShadow = true;
scene.add(cube6);


//gambar uas grafkom
const cube7 = new THREE.Mesh(geometrytujuh, material4);
cube7.position.z = -8;
cube7.position.x = -1.5;
cube7.position.y = 22;
cube7.castShadow = true;
scene.add(cube7);


//dinding sebelah kiri
const plane2 = new THREE.Mesh(new THREE.PlaneGeometry(17, 40), material3);
plane2.position.x = -Math.PI * 8.5;
plane2.position.y = 7;
plane2.position.z = -0.50;
plane2.rotation.y = -30;
plane2.receiveShadow = true;
scene.add(plane2);


//dinding tengah
const plane3 = new THREE.Mesh(new THREE.PlaneGeometry(55, 17.33), material3);
plane3.position.x = -Math.PI * 0.5;
plane3.position.y = 26.5;
plane3.position.z = -1;
plane3.rotation.x = -30;
scene.add(plane3);


//dinding sebelah kanan
const plane4 = new THREE.Mesh(new THREE.PlaneGeometry(17, 40), material3);
plane4.position.x = -Math.PI * -7.5;
plane4.position.y = 7;
plane4.position.z = -0.50;
plane4.rotation.y = 30;
plane4.receiveShadow = true;
scene.add(plane4);




//controls untuk bola basket, ke depan-belakang dan ke kiri-kanan
gui.add(sphere.position, "x").min(-23).max(20.55).step(0.01).name("depan-belakang");
gui.add(sphere.position, "y").min(-12.2).max(5.37).step(0.01).name("kiri-kanan");



//ukuran canvas
const sizes = {
    width: 1700,
    height: 700,
}


//camera menggunakan perspective camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 140);
camera.position.z = 4;
camera.position.x = 0;
camera.position.y = -4;
camera.lookAt(sphere.position); //fokus ke bola
scene.add(camera);



//orbit controls, agar dapat dikendalikan lewat mouse/kursor
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});


//untuk shadow
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//resize renderer
renderer.setSize(sizes.width, sizes.height);

// //Clock, untuk melooping  basket ke atas bawah
const clock = new THREE.Clock();
const loop = () => {
    const elaspsedTime = clock.getElapsedTime();
    renderer.render(scene, camera);
    sphere.position.z = Math.sin(elaspsedTime / 2) * 8.7;
    window.requestAnimationFrame(loop);
};

loop();
