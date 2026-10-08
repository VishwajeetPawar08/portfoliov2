// src/components/ConnectMe.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Linkedin, Twitter, Mail, MessageSquare, FileText } from "lucide-react";
import "../styles/App.css";

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.2, // More pronounced scale
    color: "var(--accent-primary)", // Change color on hover
    boxShadow: "0 8px 16px rgba(74, 144, 226, 0.4)", // Add a shadow
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const ConnectMe = () => {
  return (
    <section id="connect">
      <SectionHeader
        title="Connect Me"
        description="Great ideas start with a simple hello. Let’s build something remarkable — reach out through any of the links below!"
      />
      <motion.div
        className="section-content"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3.5rem",
          flexWrap: "wrap",
          paddingTop: "2.5rem",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/vishwajeet-pawar-82b9b0283/" // Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-dark)",
            padding: "1.5rem",
            borderRadius: "var(--radius)",
            backgroundColor: "var(--bg-light)",
            boxShadow: "0 4px 10px var(--shadow-light)",
            border: "1px solid var(--border-color)",
          }}
        >
          <Linkedin size={56} style={{ marginBottom: "0.8rem" }} />
          <span style={{ fontWeight: "500", fontSize: "1.1em" }}>LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://twitter.com/YOUR_X_PROFILE" // Replace with your X (Twitter)
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-dark)",
            padding: "1.5rem",
            borderRadius: "var(--radius)",
            backgroundColor: "var(--bg-light)",
            boxShadow: "0 4px 10px var(--shadow-light)",
            border: "1px solid var(--border-color)",
          }}
        >
          <Twitter size={56} style={{ marginBottom: "0.8rem" }} />
          <span style={{ fontWeight: "500", fontSize: "1.1em" }}>
            X (Twitter)
          </span>
        </motion.a>

        <motion.a
          href="https://wa.me/+917447454264" // Replace with your WhatsApp number (e.g., +919876543210)
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-dark)",
            padding: "1.5rem",
            borderRadius: "var(--radius)",
            backgroundColor: "var(--bg-light)",
            boxShadow: "0 4px 10px var(--shadow-light)",
            border: "1px solid var(--border-color)",
          }}
        >
          <MessageSquare size={56} style={{ marginBottom: "0.8rem" }} />
          <span style={{ fontWeight: "500", fontSize: "1.1em" }}>WhatsApp</span>
        </motion.a>

        <motion.a
          href="mailto:vpawar6254@gmail.com" // Replace with your email
          target="_blank"
          variants={iconVariants}
          whileHover="hover"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-dark)",
            padding: "1.5rem",
            borderRadius: "var(--radius)",
            backgroundColor: "var(--bg-light)",
            boxShadow: "0 4px 10px var(--shadow-light)",
            border: "1px solid var(--border-color)",
          }}
        >
          <Mail size={56} style={{ marginBottom: "0.8rem" }} />
          <span style={{ fontWeight: "500", fontSize: "1.1em" }}>Mail</span>
        </motion.a>

        <motion.a
          href="https://drive.google.com/drive/folders/1qSf9z4C6ridY3xaFcwSrkKEc8suYHPwC"
          target="_blank"
          variants={iconVariants}
          whileHover="hover"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-dark)",
            padding: "1.5rem",
            borderRadius: "var(--radius)",
            backgroundColor: "var(--bg-light)",
            boxShadow: "0 4px 10px var(--shadow-light)",
            border: "1px solid var(--border-color)",
          }}
        >
          <FileText size={56} style={{ marginBottom: "0.8rem" }} />
          <span style={{ fontWeight: "500", fontSize: "1.1em" }}>Download Resume</span>
        </motion.a>
      </motion.div>

    </section>
  );
};

export default ConnectMe;
