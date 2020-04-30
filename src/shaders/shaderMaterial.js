import * as THREE from 'three'
// import { doorColorTexture, doorAlphaTexture, matcapTexture } from '../basics/textures'


// Geometry
const shaderGeometry = new THREE.SphereBufferGeometry(5, 64, 64)

const randomAttribute = new Float32Array(shaderGeometry.attributes.position.count)
for (let i = 0; i < shaderGeometry.attributes.position.count; i += 1) {
  randomAttribute[i] = Math.random()
}
shaderGeometry.setAttribute('aRandom', new THREE.BufferAttribute(randomAttribute, 1))


// Material
export const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
        varying vec4 vModelPosition;
        uniform float uFrequency;
        uniform float uTime;
        attribute float aRandom;
        varying float vRandom;
        void main()
        {
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            modelPosition.z += sin(position.y * uFrequency + uTime * 0.001);
            vModelPosition = modelPosition;
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            vRandom = aRandom;
            gl_Position = projectedPosition;
        }
    `,
  fragmentShader: `
        uniform float uFrequency;
        uniform float uTime;
        varying vec4 vModelPosition;
        varying float vRandom;
        void main()
        {
            gl_FragColor = vec4(sin(vModelPosition.x * uFrequency + uTime * 0.001) * vRandom, 0.0, 0.0, 1.0);
        }
    `,
  wireframe: true,
  uniforms:
    {
      uTime: { value: 0 },
      uFrequency: { value: 6 },
    },
})

// Mesh
const shaderMesh = new THREE.Mesh(shaderGeometry, shaderMaterial)

export default shaderMesh


/**
 gl_Position: position of the triangle
 projectionMatrix: projection on a 2D space (need a vec4)
 modelViewMatrix: apply transformation of the model + of the view (need a vec4)
 position: basic position of the vertice

 gl_FragColor: px color (rgba so vec4)
* */

/**
 * Varying: to pass data from vertex shader to fragment shader (eg. black and red on a shape)
 * Uniforms: to pass data from JS to shaders (position, intensity, etc.)
 * Attributes: to pass different data to each vertice
 */
