import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDScene = () => {
  useEffect(() => {
    // 1️⃣ Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30, // Adjusted FOV for better visibility
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Ensure the div exists before appending the renderer
    const container = document.getElementById("container3d");
    if (!container) {
      console.error("Container not found!");
      return;
    }
    container.appendChild(renderer.domElement);

    // 2️⃣ Load 3D Model
    let mixer;
    const loader = new GLTFLoader();
    loader.load(
      "/super_bunny_final.glb",
      (gltf) => {
        const model = gltf.scene;

        model.scale.set(2, 2, 2); // Adjust model size if needed
        // model.position.set(0, -1, 0);
        model.position.y = -2;
        model.position.x = 5;
        model.position.z =0;
        model.rotation.y = 3.5;
        scene.add(model);

        mixer =new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

      },
      (xhr) => {
        console.log(`Loading: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    //Light
    const ambienLight = new THREE.AmbientLight(0xffffff,1.3);
    scene.add(ambienLight);

    const topLight = new THREE.DirectionalLight(0xffffff,1);
    topLight.position.set(500,500,500);
    scene.add(topLight);

    // 3️⃣ Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if(mixer)  mixer.update(0.02)
    };
    animate();

    // 4️⃣ Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5️⃣ Cleanup on Component Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []); // useEffect runs only once when component mounts

  return <div id="container3d"></div>;
};

export default ThreeDScene;
