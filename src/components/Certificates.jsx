// src/components/Certificates.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificateData } from '../data/certificateData';
import SectionHeader from './SectionHeader';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import '../styles/App.css';

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" >
      <SectionHeader
        title="Certificates"
        description="Showcasing my acquired certifications and continuous learning."
      />
      <motion.div
        className="grid-container grid-col-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {certificateData.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="card"
            variants={itemVariants}
            onClick={() => setSelectedCert(cert)}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px var(--shadow-medium)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ cursor: 'pointer', overflow: 'hidden', padding: '1.5rem' }} // Slightly less padding to emphasize image
          >
            <img
              src={cert.image}
              alt={cert.name}
              style={{
                width: '100%',
                height: '250px', // Fixed height for consistency
                objectFit: 'cover', // Cover the area, potentially cropping
                borderRadius: 'calc(var(--radius) - 5px)', // Slightly smaller radius than card
                marginBottom: '1.25rem',
                border: '1px solid var(--border-color)'
              }}
            />
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.4em', marginBottom: '0.5em' }}>{cert.name}</h3>
            <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)' }}>{cert.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedCert && (
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="sm:max-w-[900px] w-full p-6">
            <DialogHeader>
              <DialogTitle style={{ fontSize: '1.8em', color: 'var(--accent-primary)' }}>{selectedCert.name}</DialogTitle>
              <DialogDescription style={{ fontSize: '1.1em', color: 'var(--text-dark)' }}>{selectedCert.description}</DialogDescription>
            </DialogHeader>
            <div style={{ padding: '1.5rem 0', textAlign: 'center' }}>
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border-color)' }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Certificates;