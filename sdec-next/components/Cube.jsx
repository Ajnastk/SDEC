import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";

const Cube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -50000,
      10000
    );
    camera.position.set(0, 0, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearAlpha(0); // Transparent background
    scene.background = null; // Remove the background color

    mountRef.current.appendChild(renderer.domElement);

    // Reference to store the loaded model
    const modelRef = { current: null };

    // Load Spline scene
    const loader = new SplineLoader();
    loader.load("https://prod.spline.design/R8a4EFZermRsIV2R/scene.splinecode", (splineScene) => {
      scene.add(splineScene);
      modelRef.current = splineScene; // Store the loaded model
      
      // Create a rotation group to handle rotation if direct manipulation doesn't work
      const rotationGroup = new THREE.Group();
      scene.remove(splineScene);
      rotationGroup.add(splineScene);
      scene.add(rotationGroup);
      modelRef.current = rotationGroup;
    });

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    controls.enableZoom = false; // Disable zooming
    
    // We'll handle rotation manually instead of using autoRotate
    controls.autoRotate = false;
    controls.enableRotate = false; // Disable manual rotation from user input

    // Resize handling
    const handleResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      controls.update();

      // Apply direct rotation to the model
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Rotate around Y axis continuously
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Cube;