import * as THREE from 'three'
import './styles/main.scss'
import houseGroup from './house/mesh'
import particles from './particles/mesh'
import objectsGroup, { sphere, plane, torusKnot } from './basics/mesh'
import { ambientLight, directionalLight, directionalLightHelper } from './basics/lights'
import camera from './house/camera'
import renderer from './house/renderer'
import { mouseMove, resizeWindow } from './house/controls'
import gltfLoader from './models/models'

gltfLoader.load(
  './src/models/duck/glTF-Draco/Duck.gltf',
  (gltf) => {
    const child = gltf.scene.children[0]
    scene.add(child)
  },
)


const scene = new THREE.Scene()
scene.add(houseGroup)
scene.add(objectsGroup)
scene.add(particles)
scene.add(camera)
scene.add(ambientLight)
scene.add(directionalLight)
scene.add(directionalLightHelper)
renderer.render(scene, camera)

houseGroup.visible = false
objectsGroup.visible = false
particles.visible = false


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
