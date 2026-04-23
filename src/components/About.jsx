import React from 'react';
import { motion } from 'framer-motion';
import abstractImg from '../assets/abstract.png';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={abstractImg} 
              alt="Digital Technology Workspace" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-glow)' }} 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About <span className="text-gradient">Us</span></h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))', borderRadius: '2px' }}></div>
            </div>
            
            <div style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                <strong style={{ color: 'var(--text-primary)' }}>Spidhunt Studios</strong> is a creative technology agency founded by Shailesh Kumar, combining technical development with real-world content experience.
              </p>
              <p>
                With a strong presence in the digital space—including over <span className="text-gradient" style={{ fontWeight: '700' }}>3.8 million subscribers</span> on the Spidboy platform and <span className="text-gradient" style={{ fontWeight: '700' }}>200K+ subscribers</span> on Aryaverse—we understand how users think, interact, and engage with digital products.
              </p>
              <p>
                Currently pursuing a B.Tech in Computer Science (AI & ML) at Dev Bhoomi University, we bring a blend of modern development skills and creative execution to every project.
              </p>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '600', marginTop: '1rem' }}>
                We don’t just build apps and websites—we build experiences designed for growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
