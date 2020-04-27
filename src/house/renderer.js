import * as THREE from 'three'
import sizes from './sizes'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

export default renderer
