// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import SectionHeader from './SectionHeader';
import '../styles/App.css';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const Skills = () => {
  return (
    <section id="skills">
      <SectionHeader
        title="Skills"
        description="The coding languages, technologies and tools I'm proficient in, constantly expanding my expertise."
      />
      <motion.div
        className="section-content"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', paddingTop: '2rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.08 }} // Quicker stagger
      >
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-tag"
            variants={itemVariants}
            whileHover={{ scale: 1.07, backgroundColor: 'var(--accent-primary)', color: 'var(--text-white)', boxShadow: '0 6px 12px rgba(74, 144, 226, 0.3)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-dark)',
              padding: '1rem 2rem', // Larger padding
              borderRadius: '30px', // More rounded
              fontWeight: '500',
              border: '1px solid var(--border-color)',
              cursor: 'default',
              boxShadow: '0 3px 8px var(--shadow-light)',
              fontSize: '1.1em'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;