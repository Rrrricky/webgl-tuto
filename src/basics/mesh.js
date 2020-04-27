import * as THREE from 'three'
import material from './materials'

const objectsGroup = new THREE.Group()


// Sphere
export const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), material)
sphere.position.x = -6
objectsGroup.add(sphere)

sphere.castShadow = true

// Plane
export const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4, 4, 4), material)
objectsGroup.add(plane)

plane.castShadow = true

// Torus Knot
export const torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.5, 0.5, 128, 16), material)
torusKnot.position.x = 6
objectsGroup.add(torusKnot)

torusKnot.castShadow = true

// Floor
export const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(20, 20, 1, 1), material)
floor.position.y = -3
floor.rotation.x -= Math.PI * 0.5
objectsGroup.add(floor)

floor.receiveShadow = true

export default objectsGroup
