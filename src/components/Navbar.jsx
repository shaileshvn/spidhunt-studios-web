import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    padding: scrolled ? '1rem 2rem' : '2rem',
    transition: 'all 0.3s ease',
    background: scrolled ? 'var(--glass-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    letterSpacing: '-0.5px'
  };

  const menuStyles = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  };

  const linkStyles = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyles}>
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/src/assets/logo.png" alt="Spidhunt Studios" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
      </a>
      
      <div className="desktop-menu" style={menuStyles}>
        <a href="#about" style={linkStyles}>About</a>
        <a href="#services" style={linkStyles}>Services</a>
        <a href="#experience" style={linkStyles}>Experience</a>
        <a href="#process" style={linkStyles}>Process</a>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
