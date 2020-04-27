import * as THREE from 'three'
import doorColorSource from '../images/house/door/color.jpg'
import doorAmbientOcclusionSource from '../images/house/door/ambientOcclusion.jpg'
import doorHeightSource from '../images/house/door/height.png'
import doorMetalnessSource from '../images/house/door/metalness.jpg'
import doorNormalSource from '../images/house/door/normal.jpg'
import doorAlphaSource from '../images/house/door/alpha.jpg'
import doorRoughnessSource from '../images/house/door/roughness.jpg'
import matcapSource from '../images/matcaps/1.jpg'

export const textureLoader = new THREE.TextureLoader()
export const doorColorTexture = textureLoader.load(doorColorSource)
export const doorAmbientOcclusionTexture = textureLoader.load(doorAmbientOcclusionSource)
export const doorHeightTexture = textureLoader.load(doorHeightSource)
export const doorMetalnessTexture = textureLoader.load(doorMetalnessSource)
export const doorNormalTexture = textureLoader.load(doorNormalSource)
export const doorAlphaTexture = textureLoader.load(doorAlphaSource)
export const doorRoughnessTexture = textureLoader.load(doorRoughnessSource)
export const matcapTexture = textureLoader.load(matcapSource)
