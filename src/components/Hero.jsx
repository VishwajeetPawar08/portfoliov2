// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";
import "../styles/App.css";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 10,
      when: "beforeChildren", // Animate parent first
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.0, // Delay after text animation
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const Hero = () => {
  return (
    <section id="home" style={{ backgroundColor: "var(--bg-light)" }}>
      <motion.div
        className="section-content"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.h1
          variants={textVariants}
          style={{
            color: "var(--accent-primary)",
            fontSize: "3.5em",
            marginBottom: "0.2em",
          }}
        >
          Hello, I'm Vishwajeet Vijay Pawar
        </motion.h1>
        <motion.p
          variants={textVariants}
          style={{
            fontSize: "1.8em",
            color: "var(--text-dark)",
            maxWidth: "800px",
            margin: "0 auto 2.5em",
            fontWeight: 300,
          }}
        >
          A passionate{" "}
          <strong style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
            Software Engineer
          </strong>{" "}
          building engaging and performant web experiences.
        </motion.p>
        <motion.div
          variants={buttonVariants}
          whileHover={{
            scale: 1.07,
            backgroundColor: "var(--accent-primary)",
            color: "var(--text-white)",
            boxShadow: "0 6px 12px rgba(74, 144, 226, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            display: "inline-block",
            borderRadius: "50px",
          }}
        >
          <ScrollLink to="experience" smooth={true} duration={700} offset={-90}>
            <Button
              variant="default"
              size="lg"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-white)',
                padding: "1rem 2.5rem",
                fontSize: "1.2em",
                borderRadius: "50px",
                boxShadow: "0 3px 8px var(--shadow-light)",
                fontWeight: 500,
                border: "1px solid var(--border-color)",
                cursor: "pointer",
              }}
            >
              Explore My Work
            </Button>
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
