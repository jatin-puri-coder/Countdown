//THREE.JS

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

//COUNTDOWN TIMER
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


function countdown () {
  var searchDate = document.getElementById('searchdate').value;
  const currentDate = new Date();
  
  if (searchDate == 0) {targetDate = currentDate } 
  else { targetDate = new Date(searchDate);}

  const seconds = Math.floor(( targetDate - currentDate ) / 1000)
  const days = Math.floor(seconds / 3600 / 24)
  const hours = Math.floor((seconds / 3600) % 24)
  const mins = Math.floor((seconds / 60) % 60)
  const secondsLeft = Math.floor(seconds % 60)
  
  daysEl.innerHTML = days
  hoursEl.innerHTML = hours
  minsEl.innerHTML = mins
  secondsEl.innerHTML = secondsLeft
}

countdown();

setInterval(countdown, 1000)
