import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Discovery & Strategy", desc: "Understanding your vision, audience, and market." },
  { number: "02", title: "Design & Prototyping", desc: "Creating intuitive and engaging user experiences." },
  { number: "03", title: "Development", desc: "Writing clean, scalable, and high-performance code." },
  { number: "04", title: "Launch & Scale", desc: "Deploying the product and strategizing for growth." }
];

const Process = () => {
  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Our <span className="text-gradient">Process</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A streamlined approach from idea to execution.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical line connector */}
          <div style={{
            position: 'absolute',
            left: '35px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-1), var(--accent-2))',
            opacity: 0.3,
            zIndex: 0,
            display: 'block'
          }} className="process-line" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: index !== steps.length - 1 ? '4rem' : '0',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                background: 'var(--bg-primary)', 
                border: '2px solid var(--accent-1)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                marginRight: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-1)',
                boxShadow: '0 0 15px var(--accent-glow)'
              }}>
                {step.number}
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
