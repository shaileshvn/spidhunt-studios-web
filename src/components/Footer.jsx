import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img src={logo} alt="Spidhunt Studios" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              We don't just build apps and websites—we build experiences designed for growth.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#about" style={linkStyle}>About Us</a></li>
              <li><a href="#services" style={linkStyle}>Services</a></li>
              <li><a href="#experience" style={linkStyle}>Experience</a></li>
              <li><a href="#contact" style={linkStyle}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ color: 'var(--text-secondary)' }}>Mobile App Development</li>
              <li style={{ color: 'var(--text-secondary)' }}>Web Development</li>
              <li style={{ color: 'var(--text-secondary)' }}>UI/UX Design</li>
              <li style={{ color: 'var(--text-secondary)' }}>Content & Media Strategy</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          &copy; {currentYear} Spidhunt Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  transition: 'color 0.3s ease'
};

export default Footer;
