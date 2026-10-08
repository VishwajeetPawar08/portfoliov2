// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        backgroundColor: 'var(--back-dark)',
        color: 'var(--bg-secondary)', /* Lighter text on dark background */
        textAlign: 'center',
        padding: '2.5rem', /* More padding */
        marginTop: 'auto',
        fontSize: '0.95em'
      }}
    >
      <p style={{color: 'var(--text-secondary)'}}>&copy; {new Date().getFullYear()} Vishwajeet Vijay Pawar. All rights reserved.</p>
      <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary)' }}>
        Crafted with React, Framer Motion & Custom CSS.
      </p>
    </motion.footer>
  );
};

export default Footer;