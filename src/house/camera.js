import * as THREE from 'three'
import sizes from './sizes'

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10
camera.position.y = 10
camera.position.x = 4

export default camera
