import * as THREE from 'three'
import './styles/main.scss'
import { ambientLight, directionalLight, directionalLightHelper } from './basics/lights'
import camera from './basics/camera'
import renderer from './basics/renderer'
import { mouseMove, resizeWindow } from './basics/controls'
import gltfLoader from './models/models'
import material from './basics/materials'

const scene = new THREE.Scene()

let child

gltfLoader.load(
  './src/models/ElisaStyle.glb',
  (gltf) => {
    child = gltf.scene.children[0]
    scene.add(child)
  },
  (progress) => {
    console.log('progress')
    console.log(progress)
  },
  (error) => {
    console.log('error')
    console.log(error)
  },
)

scene.add(camera)
scene.add(ambientLight)
scene.add(directionalLight)
scene.add(directionalLightHelper)
renderer.render(scene, camera)

mouseMove()
resizeWindow()

const loop = () => {
  window.requestAnimationFrame(loop)
  renderer.render(scene, camera) // Render
  if (child) child.rotation.y += 0.02
}
loop()
