import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Rocket, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Code size={32} color="var(--accent-1)" />,
    title: "Beyond Code",
    description: "We don't just write code; we design products with user retention and engagement in mind."
  },
  {
    icon: <Users size={32} color="var(--accent-2)" />,
    title: "Creator-Led Experience",
    description: "Having built massive online communities, we know what captures attention and drives action."
  },
  {
    icon: <Rocket size={32} color="var(--accent-1)" />,
    title: "End-to-End Execution",
    description: "From wireframes to launch, we handle the entire digital lifecycle."
  },
  {
    icon: <Zap size={32} color="var(--accent-2)" />,
    title: "Modern Tech Stack",
    description: "We use the latest frameworks to ensure your product is fast, scalable, and future-proof."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            We bring a unique blend of technical expertise and audience understanding to every project.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ textAlign: 'center', padding: '3rem 2rem' }}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{reason.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
