import * as THREE from 'three'
import './styles/main.scss'
import houseGroup from './house/mesh'
import particles from './particles/mesh'
import objectsGroup, { sphere, plane, torusKnot } from './basics/mesh'
import { pointLight, pointLightHelper } from './basics/lights'
import camera from './house/camera'
import renderer from './house/renderer'
import { mouseMove, resizeWindow } from './house/controls'


const scene = new THREE.Scene()
scene.add(houseGroup)
scene.add(objectsGroup)
scene.add(particles)
scene.add(camera)
scene.add(pointLight) // Optional (for some materials)
scene.add(pointLightHelper)
renderer.render(scene, camera)

houseGroup.visible = false
objectsGroup.visible = false


mouseMove()
resizeWindow()

const loop = () => {
  window.requestAnimationFrame(loop)
  renderer.render(scene, camera) // Render
  // Update objects
  sphere.rotation.y += 0.002
  plane.rotation.y += 0.002
  torusKnot.rotation.y += 0.002
  particles.rotation.y += 0.002
  particles.rotation.y += 0.002
}
loop()
