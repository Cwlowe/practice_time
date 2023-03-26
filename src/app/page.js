"use client";
import Image from 'next/image'
import { useEffect } from 'react';
import { Inter, Truculenta } from 'next/font/google'
import styles from './page.module.css'
import * as THREE from 'three';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    const canvas = document.getElementById('myThreeJSproject')
    camera.position.z = 96;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialiasL: true,
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement)
    const boxGeometry = new THREE.BoxGeometry(16,16,16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry,boxMaterial);
    scene.add(boxMesh);
  
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    const ambientLight = new THREE.AmbientLight(0xf9f7f4, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);

    const animate = () => {
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
  },[]);
  
  return (
    <main >
      <canvas id="myThreeJSproject"/>
       
    </main>
  )
}
