// src/components/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120, // Slightly more springy
      damping: 15,
      mass: 0.5,
      delay: 0.1 // Small delay for header
    }
  },
};

const SectionHeader = ({ title, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }} // Trigger earlier
      variants={sectionHeaderVariants}
      className="section-header"
      style={{ marginBottom: '3rem', textAlign: 'center' }}
    >
      <h2 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{title}</h2>
      {description && <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1em' }}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;