import * as THREE from 'three'
import grassColorSource from '../images/house/grass/color.jpg'
import wallColorSource from '../images/house/bricks/color.jpg'
import doorColorSource from '../images/house/door/color.jpg'

const textureLoader = new THREE.TextureLoader()
export const grassColorTexture = textureLoader.load(grassColorSource)
export const wallColorTexture = textureLoader.load(wallColorSource)
export const doorColorTexture = textureLoader.load(doorColorSource)
