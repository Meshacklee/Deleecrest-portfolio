import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CosmicBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
      opacity: 0.8
    });

    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Nebula clouds
    const createNebula = (size, color, position) => {
      const nebulaGeometry = new THREE.SphereGeometry(size, 32, 32);
      const nebulaMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      });
      
      const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
      nebula.position.set(...position);
      return nebula;
    };

    const nebula1 = createNebula(300, 0x885CF6, [-400, 200, -500]);
    const nebula2 = createNebula(250, 0xC084FC, [300, -150, -300]);
    const nebula3 = createNebula(200, 0xF472B6, [0, 300, -400]);
    
    scene.add(nebula1);
    scene.add(nebula2);
    scene.add(nebula3);

    camera.position.z = 5;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const ripplePoints = [];
    
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Ripple effect
    const createRipple = (position) => {
      const rippleGeometry = new THREE.BufferGeometry();
      const rippleMaterial = new THREE.PointsMaterial({
        color: 0xF472B6,
        size: 2,
        transparent: true,
        opacity: 0.8
      });
      
      const vertices = [];
      for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 50;
        vertices.push(
          position.x + Math.cos(angle) * radius,
          position.y + Math.sin(angle) * radius,
          position.z
        );
      }
      
      rippleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const ripple = new THREE.Points(rippleGeometry, rippleMaterial);
      scene.add(ripple);
      ripplePoints.push({ points: ripple, life: 1.0 });
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate scene
      scene.rotation.y += 0.001;
      
      // Update ripples
      for (let i = ripplePoints.length - 1; i >= 0; i--) {
        const ripple = ripplePoints[i];
        ripple.life -= 0.01;
        ripple.points.material.opacity = ripple.life;
        
        if (ripple.life <= 0) {
          scene.remove(ripple.points);
          ripplePoints.splice(i, 1);
        }
      }
      
      // Mouse interaction
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(stars);
      if (intersects.length > 0) {
        createRipple(intersects[0].point);
      }
      
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="cosmic-background" />;
};

export default CosmicBackground;