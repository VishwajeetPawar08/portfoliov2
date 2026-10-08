// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import SectionHeader from './SectionHeader';
import '../styles/App.css';

const itemVariants = {
  hidden: { opacity: 0, x: -80 }, // Slide in from left
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeader
        title="Experience"
        description="My professional journey and contributions."
      />
      <motion.div
        className="grid-container grid-col-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div key={exp.id} className="card" variants={itemVariants} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  style={{ width: '85px', height: '85px', marginRight: '1.5rem', objectFit: 'contain', border: '1px solid var(--border-color)', padding: '2px' }}
                />
              )}
              <div className="card-header" style={{ marginBottom: 0 }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.3em' }}>{exp.company}</h3>
                <p style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '1.05em' }}>{exp.roles}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '0.2em' }}>{exp.duration}</p>
              </div>
            </div>
            <div className="card-body">
              <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.8em' }}>Responsibilities:</h4>
              <ul style={{ listStyleType: 'disc', marginLeft: '1.8em', color: 'var(--text-dark)' }}>
                {exp.description.map((responsibility, i) => (
                  <li key={i} style={{ marginBottom: '0.6em', fontSize: '0.95em' }}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;