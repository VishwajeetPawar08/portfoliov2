// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'certificates', 'connect'];
      const currentScrollPos = window.scrollY + 90;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && currentScrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      controls.start({ x: '100%' });
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, controls]);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Connect', to: 'connect' },
  ];

  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className="nav-title">Portfolio</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.to} className="nav-link">
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className={activeSection === link.to ? 'active' : ''}
              onSetActive={() => setActiveSection(link.to)}
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Theme toggle button */}
      <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)} title="Toggle Theme">
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.div
        className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}
        initial={{ x: '100%' }}
        animate={controls}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.to} className="mobile-nav-link">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => handleLinkClick(link.to)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
