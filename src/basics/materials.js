import * as THREE from 'three'
import { doorColorTexture, doorAlphaTexture, matcapTexture } from './textures'

const material = new THREE.MeshStandardMaterial({
  matcap: matcapTexture, // Performant texture
  map: doorColorTexture, // Texture
  alphaMap: doorAlphaTexture, // Texture opacity
  transparent: false, // Allow opacity
  opacity: 0.8, // Global opacity
  wireframe: false, // Display vertices
  side: THREE.DoubleSide,
  color: 0xffffff,
  shininess: 100,
  specular: 0x1188ff, // Reflexion color
  metalness: 0.4,
  roughness: 0,
  // aoMap: doorAmbientOcclusionTexture, // Texture of shadows
  // displacementMap: doorHeightTexture, // Texture of vertices
  // displacementScale: 0.2, // Scale for displacementMap
  // metalnessMap: doorMetalnessTexture, // Texture for metalness
  // roughnessMap: doorColorRoughnessTexture, // Texture for roughness
  // normalMap: doorNormalTexture, // Texture of curves
  // alphaMap: doorAlphaTexture, // Texture of transparency
})

export default material
