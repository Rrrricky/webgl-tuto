import * as THREE from 'three'
import { grassColorTexture, wallColorTexture, doorColorTexture } from './textures'

const houseGroup = new THREE.Group()

// Grass
const grass = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 15, 1, 1),
  new THREE.MeshBasicMaterial({ map: grassColorTexture }),
)
grass.rotation.x = -Math.PI * 0.5
houseGroup.add(grass)


// Walls
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(5, 2.5, 5, 1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffcc99, map: wallColorTexture }),
)
walls.position.y = 1.25
houseGroup.add(walls)


// Roof
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(4.1, 1, 4),
  new THREE.MeshBasicMaterial({ color: 0x885522 }),
)
roof.position.y += 2.5 + 0.5
roof.rotation.y += Math.PI * 0.25
houseGroup.add(roof)


// Door
const door = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2, 1),
  new THREE.MeshBasicMaterial({ color: 0xff8866, map: doorColorTexture }),
)
door.position.x = -2.5
door.position.y = 1
houseGroup.add(door)


// Brush
const bush1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x228833, map: grassColorTexture }),
)
bush1.position.x = -2.8
bush1.position.z = 1
bush1.position.y = 0.2
houseGroup.add(bush1)

const bush2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.4, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x228833, map: grassColorTexture }),
)
bush2.position.x = -2.8
bush2.position.z = -0.8
bush2.position.y = 0.15
houseGroup.add(bush2)

export default houseGroup
