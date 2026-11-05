import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  className?: string;
}

export const VisionSynthoidCore3D: React.FC<Props> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<{
    pulse: () => void;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire interactive synthoid assembly
    const synthoidGroup = new THREE.Group();
    scene.add(synthoidGroup);

    // 1. Central Mind Stone (Golden Amber Octahedron with wireframe inner)
    const stoneGeo = new THREE.OctahedronGeometry(1.2, 0);
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xd97706,
      emissiveIntensity: 0.6,
      wireframe: false,
    });
    const mindStone = new THREE.Mesh(stoneGeo, stoneMat);
    synthoidGroup.add(mindStone);

    // Inner wireframe core
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerWire = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8, 1), wireMat);
    mindStone.add(innerWire);

    // 2. Holographic Cybernetic Orbital Rings (Synthoid Energy Bands)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.03, 16, 64), ringMat1);
    ring1.rotation.x = Math.PI / 3;
    synthoidGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Bangladesh Emerald Green
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.02, 16, 64), ringMat2);
    ring2.rotation.y = Math.PI / 4;
    synthoidGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xf43f5e, // Subtle crimson accent
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.02, 16, 64), ringMat3);
    ring3.rotation.z = Math.PI / 6;
    synthoidGroup.add(ring3);

    // 3. Floating Neural Particle Cloud
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    synthoidGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf59e0b, 2.5, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 2, 20);
    cyanLight.position.set(-3, -2, -2);
    scene.add(cyanLight);

    // Mouse parallax tracking
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.4;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Interactive pulse trigger
    let pulseScale = 1.0;
    coreRef.current = {
      pulse: () => {
        pulseScale = 1.6;
        stoneMat.emissiveIntensity = 2.0;
      },
    };

    // Animation Loop using performance.now()
    let animId: number;
    let prevTime = performance.now();
    const startTime = performance.now();

    const animate = (currentTime: number = performance.now()) => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min((currentTime - prevTime) / 1000, 0.1);
      prevTime = currentTime;
      const time = (currentTime - startTime) / 1000;

      // Smooth rotation
      mindStone.rotation.y += 0.8 * delta;
      mindStone.rotation.x = Math.sin(time * 0.7) * 0.2;
      innerWire.rotation.y -= 1.2 * delta;

      ring1.rotation.z += 0.4 * delta;
      ring2.rotation.x += 0.3 * delta;
      ring3.rotation.y += 0.5 * delta;

      particles.rotation.y += 0.15 * delta;

      // Pulse damping
      if (pulseScale > 1.0) {
        pulseScale += (1.0 - pulseScale) * 0.1;
        stoneMat.emissiveIntensity = 0.6 + (pulseScale - 1.0) * 1.5;
      }
      const breathe = 1.0 + Math.sin(time * 2.5) * 0.05;
      mindStone.scale.setScalar(pulseScale * breathe);

      // Smooth mouse tilt
      synthoidGroup.rotation.y += (targetX - synthoidGroup.rotation.y) * 0.05;
      synthoidGroup.rotation.x += (-targetY - synthoidGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      stoneGeo.dispose();
      stoneMat.dispose();
      wireMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  const handleClick = () => {
    if (coreRef.current) {
      coreRef.current.pulse();
    }
  };

  return (
    <div
      ref={mountRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label="Vision AI Mind Stone 3D Core - Click to activate neural pulse"
      className={`relative cursor-pointer select-none group ${className}`}
      data-testid="vision-3d-core"
    >
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-wider uppercase bg-slate-900/80 px-2.5 py-1 rounded border border-amber-500/40 text-amber-300 backdrop-blur-sm whitespace-nowrap">
          মায়ান্ড স্টোন কোর (ক্লিক করে পালস দেখুন)
        </span>
      </div>
    </div>
  );
};
