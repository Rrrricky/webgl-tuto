import * as THREE from 'three'

export const pointLight = new THREE.PointLight(0xffffff, 3, 12)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4

pointLight.castShadow = true

export const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

export const directionalLight = new THREE.DirectionalLight(0x00fffc, 1)
directionalLight.position.x = -2
directionalLight.position.y = 3
directionalLight.position.z = 4

export const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)

export const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 3, 5, 5)
rectAreaLight.position.x = 5
rectAreaLight.position.z = 5
rectAreaLight.position.y = -3
rectAreaLight.lookAt(new THREE.Vector3())

export const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
export const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight)
export const pointLightHelper = new THREE.PointLightHelper(pointLight)
