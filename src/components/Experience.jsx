import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "3.8M+", label: "Subscribers on Spidboy (Main Channel)" },
  { value: "200K+", label: "Subscribers on Aryaverse (Gaming/Tech)" },
  { value: "Web & App", label: "Specialized Development" },
  { value: "Growth", label: "Expertise in Content Strategy" }
];

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.15,
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Our <span className="text-gradient">Experience</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Backed by real audience experience and massive online communities.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '2rem' 
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ textAlign: 'center', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div className="text-gradient" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
