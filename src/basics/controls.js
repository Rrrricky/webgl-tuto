import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import sizes from './sizes'
import camera from './camera'
import renderer from './renderer'

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0


export const mouseMove = () => {
  window.addEventListener('mousemove', (_event) => {
    // Update cursor position with values between -0.5 and +0.5
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
  })
}


/**
 * Resize
 */
export const resizeWindow = () => {
  window.addEventListener('resize', () => {
    // Save width and height
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
  })
}

const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
