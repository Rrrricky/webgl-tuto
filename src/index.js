import * as THREE from 'three'
import './styles/main.scss'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Mesh
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) => {
  // Update cursor position with values between -0.5 and +0.5
  cursor.x = _event.clientX / sizes.width - 0.5
  cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Loop
 */
const loop = () => {
  window.requestAnimationFrame(loop)

  // Look at scene center
  // camera.lookAt(new THREE.Vector3(0, 0, 0))

  renderer.render(scene, camera) // Render
}

loop()

/**
 * Resize
 */
window.addEventListener('resize', () => {

  // Save width and height
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
})


const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
