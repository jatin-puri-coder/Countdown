let camera, scene, renderer, sphere

function init () {
  //Scene
scene = new THREE.Scene()

//Objects
const geometry = new THREE.SphereGeometry(.8, 3, 50)

//Materials
const material = new THREE.MeshBasicMaterial({ color: 0xbd4b1c, wireframe: true})

//Mesh
sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

//Lights
// const pointLight = new THREE.PointLight(0xffffff, 1)
// pointLight.position.set(3, 1, -5)


//Base Camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, -1, 3)
scene.add(camera)

//Renderer
renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
}

function animate () {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera)
}

init()
animate()
