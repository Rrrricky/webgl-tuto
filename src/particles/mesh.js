import * as THREE from 'three'
import particleImageSource from '../images/particles/2.png'

const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load(particleImageSource)


const particlesGeometry = new THREE.Geometry()
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.2,
  sizeAttenuation: true,
  depthWrite: false, // Prevent glitch when overlapping
  // blending: THREE.AdditiveBlending,
  vertexColors: true,
  alphaMap: particleTexture,
  transparent: true,
})

for (let i = 0; i < 500; i += 1) {
  // Vertice
  const vertice = new THREE.Vector3(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  )
  particlesGeometry.vertices.push(vertice)
  // Color
  const color = new THREE.Color(Math.random(), Math.random(), Math.random())
  particlesGeometry.colors.push(color)
}

const particles = new THREE.Points(particlesGeometry, particlesMaterial)

export default particles
