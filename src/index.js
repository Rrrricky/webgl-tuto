import * as THREE from 'three'
import './styles/main.scss'
import houseGroup from './house/mesh'
import camera from './house/camera'
import renderer from './house/renderer'
import { mouseMove, resizeWindow } from './house/controls'


const scene = new THREE.Scene()
scene.add(houseGroup)
scene.add(camera)
renderer.render(scene, camera)

mouseMove()
resizeWindow()

const loop = () => {
  window.requestAnimationFrame(loop)
  renderer.render(scene, camera) // Render
}
loop()
