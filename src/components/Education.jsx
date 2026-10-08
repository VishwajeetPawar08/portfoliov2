// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';
import SectionHeader from './SectionHeader';
import '../styles/App.css';

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

const Education = () => {
  return (
    <section id="education">
      <SectionHeader
        title="Education"
        description="My academic journey and qualifications."
      />
      <motion.div
        className="grid-container grid-col-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger earlier for grid
        transition={{ staggerChildren: 0.15 }} // Stagger children animation
      >
        {educationData.map((edu, index) => (
          <motion.div key={edu.id} className="card" variants={itemVariants}>
            <div className="card-header">
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.4em' }}>{edu.school}</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1em' }}>{edu.degree}</p>
            </div>
            <div className="card-body" style={{ color: 'var(--text-secondary)' }}>
              <p className="mb-2"><strong>Marks/CGPA:</strong> {edu.marks}</p>
              <p><strong>Duration:</strong> {edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;