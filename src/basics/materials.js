import * as THREE from 'three'

const material = new THREE.MeshBasicMaterial({
  transparent: false, // Allow opacity
  opacity: 1, // Global opacity
  wireframe: false, // Display vertices
  side: THREE.DoubleSide,
  color: 0xffffff,
})

export default material
