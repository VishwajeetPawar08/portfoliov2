// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import "../styles/App.css";

// --- Reusable Inline Styles to Avoid Repetition ---
const sharedButtonStyles = {
  backgroundColor: "var(--accent-primary)",
  color: "var(--text-white)",
  padding: "0.75rem 1.5rem",
  fontSize: "1em",
  borderRadius: "var(--radius)",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

const handleHoverStart = (e) => {
  e.currentTarget.style.transform = "translateY(-2px)";
};

const handleHoverEnd = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
};

// --- Additional Projects Data ---
const otherProjects = [
  {
    id: "coverletterhere",
    name: "Cover Letter Generator",
    link: "https://coverletterhere.vercel.app/",
  },
  {
    id: "boxoffice",
    name: "Box Office",
    link: "https://vishwajeetpawar08.github.io/BoxOffice/",
  },
  {
    id: "tictactoe",
    name: "TicTacToe",
    link: "https://tictactoebyvishwajeet.surge.sh/",
  },
  // Add more secondary projects here easily
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader
        title="Projects"
        description="Explore my key projects and their details."
      />

      {/* Main Projects Grid */}
      <motion.div
        className="grid-container grid-col-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projectData.map((project) => (
          <motion.div key={project.id} className="card" variants={itemVariants}>
            <div className="card-header">
              <h3
                style={{
                  color: "var(--accent-primary)",
                  fontSize: "1.6em",
                  marginBottom: "0.5em",
                }}
              >
                {project.name}
              </h3>
            </div>
            <div className="card-body">
              <p style={{ color: "var(--text-dark)", fontSize: "0.95em" }}>
                {project.details}
              </p>
            </div>
            {project.link && (
              <div className="card-footer">
                <Button
                  asChild
                  style={sharedButtonStyles}
                  onHoverStart={handleHoverStart}
                  onHoverEnd={handleHoverEnd}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project{" "}
                    <ExternalLink size={18} style={{ marginLeft: "10px" }} />
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* --- New Subsection: Other Projects --- */}
      <div 
        className="other-projects-section" 
        style={{ marginTop: "4rem", textAlign: "center" }}
      >
        <h2 
          style={{ 
            color: "var(--accent-primary)", 
            fontSize: "2rem", 
            marginBottom: "1.5rem" 
          }}
        >
          Other Projects
        </h2>
        
        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            gap: "1.5rem" 
          }}
        >
          {otherProjects.map((project) => (
            <Button
              key={project.id}
              asChild
              style={sharedButtonStyles}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}{" "}
                <ExternalLink size={18} style={{ marginLeft: "10px" }} />
              </a>
            </Button>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;