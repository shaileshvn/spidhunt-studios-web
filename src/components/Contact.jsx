import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Ready to start <br/>
              <span className="text-gradient">your project?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              Whether you need a full-scale app, a high-converting website, or a strategic digital presence, we're here to help you build experiences designed for growth.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(0, 240, 255, 0.1)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Mail size={24} color="var(--accent-1)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email Us</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>support.spidhuntstudios@gmail.com</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(138, 43, 226, 0.1)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Phone size={24} color="var(--accent-2)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>WhatsApp</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>+91 9470436760</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <form action="https://formsubmit.co/support.spidhuntstudios@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="_subject" value="New Contact Form Submission - Spidhunt Studios" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" name="name" placeholder="John Doe" style={inputStyle} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" name="email" placeholder="john@example.com" style={inputStyle} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Project Details</label>
                <textarea name="message" placeholder="Tell us about your project..." rows="4" style={{...inputStyle, resize: 'vertical'}} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-main)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Contact;
