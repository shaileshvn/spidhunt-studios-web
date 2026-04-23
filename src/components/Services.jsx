import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, PenTool, Video } from 'lucide-react';

const servicesData = [
  {
    icon: <Smartphone size={40} color="var(--accent-1)" />,
    title: "Mobile App Development",
    features: [
      "Android app development",
      "Play Store publishing & optimization",
      "Performance-focused builds"
    ]
  },
  {
    icon: <Globe size={40} color="var(--accent-2)" />,
    title: "Website Development",
    features: [
      "Business websites",
      "Portfolio & personal brands",
      "Landing pages that convert"
    ]
  },
  {
    icon: <PenTool size={40} color="var(--accent-1)" />,
    title: "UI/UX & Design",
    features: [
      "Clean, modern interfaces",
      "Graphic design & branding",
      "User-focused layouts"
    ]
  },
  {
    icon: <Video size={40} color="var(--accent-2)" />,
    title: "Content & Media",
    features: [
      "Video editing",
      "Voice-over & dubbing",
      "Content strategy & visuals"
    ]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Services</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '1rem', borderRadius: '12px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-1)' }}>▹</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
