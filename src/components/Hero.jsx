import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Sphere visible args={[1, 100, 200]} scale={2} position={[2, 0, -2]}>
              <MeshDistortMaterial 
                color="#8a2be2" 
                attach="material" 
                distort={0.4} 
                speed={1.5} 
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: '800', lineHeight: '1', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Spidhunt <span className="text-gradient">Studios</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-1px', lineHeight: '1.2' }}>
            We Build <span className="text-gradient">Apps & Websites</span> That People Actually Use
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '600px' }}>
            From idea to Play Store launch, we design and develop high-performance digital products backed by real audience experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
            <a href="#services" className="btn btn-secondary">View Our Work</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
