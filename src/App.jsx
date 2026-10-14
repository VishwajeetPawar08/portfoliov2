import React, { useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight, Download, Github, Linkedin, Mail,
  MessageCircle, Moon, Sun, ExternalLink, MapPin, Sparkles,
  Database, BrainCircuit, Workflow, GraduationCap
} from 'lucide-react';
import { projectData } from './data/projectData';
import { experienceData } from './data/experienceData';
import { educationData } from './data/educationData';
import { skillsData } from './data/skillsData';
import { certificateData } from './data/certificateData';
import resumePdf from './assets/Vishwajeet_Pawar_Data_Engineer_CV.pdf';
import './styles/App.css';

const linkedin = 'https://www.linkedin.com/in/vishwajeet-pawar-82b9b0283/';
const github = 'https://github.com/VishwajeetPawar08';
const email = 'mailto:vpawar6254@gmail.com';
const whatsapp = 'https://wa.me/917447454264';
// const resumeFolder = 'https://drive.google.com/drive/folders/1qSf9z4C6ridY3xaFcwSrkKEc8suYHPwC';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const techOrbit = [
  { name: 'Airflow', icon: 'devicon-apacheairflow-plain', color: '#017CEE' },
  { name: 'Databricks', icon: 'devicon-databricks-plain', color: '#FF3621' },
  { name: 'Hadoop', icon: 'devicon-hadoop-plain', color: '#66CCFF' },
  { name: 'Spark', icon: 'devicon-apachespark-original', color: '#E25A1C' },
  { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
  { name: 'Scala', icon: 'devicon-scala-plain', color: '#DC322F' },
  { name: 'Azure', icon: 'devicon-azure-plain', color: '#0078D4' },
  { name: 'GCP', icon: 'devicon-googlecloud-plain', color: '#4285F4' },
  { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
];

function TechOrbit() {
  return (
    <div className="tech-orbit" aria-label="Technology stack animation">
      <div className="orbit-glow" />
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-ring orbit-ring-three" />
      <div className="orbit-core">
        <div className="core-pulse" />
        <span className="core-label">DATA</span>
        <strong>×</strong>
        <span className="core-label">AI</span>
      </div>
      {techOrbit.map((tech, i) => (
        <motion.div
          key={tech.name}
          className={`tech-orbit-item orbit-item-${i}`}
          initial={{ opacity: 0, scale: .55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .35 + i * .07, duration: .55, type: 'spring', stiffness: 150 }}
          whileHover={{ scale: 1.14, y: -5 }}
          style={{ '--tech-color': tech.color }}
        >
          <span className="tech-icon"><i className={tech.icon} /></span>
          <span>{tech.name}</span>
        </motion.div>
      ))}
      <div className="orbit-particle particle-one" />
      <div className="orbit-particle particle-two" />
      <div className="orbit-particle particle-three" />
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 240]);

  const featuredProjects = useMemo(() => projectData.slice(0, 3), []);
  const allSkills = useMemo(() => skillsData.filter(Boolean), []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <motion.div className="ambient ambient-one" style={{ y: orbY }} />
      <div className="ambient ambient-two" />

      <header className="nav-shell">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to home">
            <span className="brand-mark">VP</span>
            <span>Vishwajeet</span>
          </button>
          <div className="nav-links">
            {['work', 'experience', 'skills', 'education', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} style={{fontSize: "15px"}}>{item}</button>
            ))}
          </div>
          <div className="nav-actions">
            <a href={github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub"><Github size={17} /></a>
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
            <a className="nav-cta" href={email}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <motion.div initial="hidden" animate="visible" variants={reveal} className="eyebrow"><span className="status-dot"/><p style={{fontSize: "13px"}}>Available for opportunities</p></motion.div>
            <motion.h2 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08 }}>
              Data Engineer building <em>production-ready</em> data & AI systems.
            </motion.h2>
            <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.16 }}>
              I design scalable pipelines, distributed data workflows and practical AI applications using Python, Spark, Azure, Databricks and modern ML techniques.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.24 }} className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('work')}>View selected work <ArrowUpRight size={17} /></button>
              <a className="secondary-btn" href={resumePdf} target="_blank" rel="noreferrer">Resume <Download size={16} /></a>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.32 }} className="hero-meta">
              <span><MapPin size={14} /> Cork, Ireland</span><span>•</span><span>Python · PySpark · Databricks · Azure · ML</span>
            </motion.div>
          </div>

          <motion.div className="hero-card" initial={{ opacity: 0, scale: .94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
            <div className="hero-card-top"><span>ENGINEERING PROFILE</span><Sparkles size={16} /></div>
            <TechOrbit />
            <div className="hero-card-footer"><span>DATA → PIPELINES → INTELLIGENCE</span><span>01</span></div>
          </motion.div>
        </section>

        <section className="proof container">
          <div className="proof-intro"><span>SELECTED PROOF</span><p>Engineering outcomes from projects and professional work.</p></div>
          <div className="proof-grid">
            <div><strong>40%</strong><span>processing efficiency improvement</span></div>
            <div><strong>0</strong><span>data loss during Azure SQL → CosmosDB migration</span></div>
            <div><strong>9.01</strong><span>CGPA in Computer Science Engineering</span></div>
            <div><strong>94.05%</strong><span>Fact Checker ensemble accuracy</span></div>
          </div>
        </section>

        <section id="work" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} className="section-heading">
            <span className="section-kicker">01 / SELECTED WORK</span>
            <h3>Case studies, not just project cards.</h3>
            <p>Three projects that show how I approach data engineering, distributed processing and applied AI.</p>
          </motion.div>
          <div className="project-showcase">
            <div className="project-list">
              {featuredProjects.map((project, index) => (
                <motion.button key={project.id} className={`project-tab ${activeProject === index ? 'active' : ''}`} onClick={() => setActiveProject(index)} whileHover={{ x: 5 }}>
                  <span className="project-number reg-text">0{index + 1}</span>
                  <span><strong>{project.name}</strong><small>{index === 0 ? 'Azure · PySpark · Databricks' : index === 1 ? 'Spark · Scala · Databricks' : 'ML · LLMs · GNN'}</small></span>
                  <ArrowUpRight size={18} />
                </motion.button>
              ))}
            </div>
            <motion.article key={activeProject} className="project-detail" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .35 }}>
              <div className="project-art">
                <div className="art-grid" />
                <span className="art-label">CASE / 0{activeProject + 1}</span>
                <div className="art-center">{activeProject === 2 ? <BrainCircuit size={42} /> : activeProject === 1 ? <Workflow size={42} /> : <Database size={42} />}</div>
              </div>
              <div className="project-detail-copy">
                <div className="project-detail-top"><span>FEATURED PROJECT</span><span>{activeProject === 2 ? 'AI / ML' : 'DATA ENGINEERING'}</span></div>
                <h3>{featuredProjects[activeProject].name}</h3>
                <p>{featuredProjects[activeProject].details}</p>
                <a href={featuredProjects[activeProject].link} target="_blank" rel="noreferrer" className="text-link">View repository <ExternalLink size={15} /></a>
              </div>
            </motion.article>
          </div>
          <div className="mini-projects more-work">
            <span>More work</span>
            {projectData.slice(3).map((p) => <a key={p.id} href={p.link} target="_blank" rel="noreferrer">{p.name} <ArrowUpRight size={13} /></a>)}
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} className="section-heading split">
              <div><span className="section-kicker">02 / EXPERIENCE</span><h2>Built in real teams.</h2></div>
              <p className='reg-text'>Professional experience across data engineering, ETL, cloud platforms and analytics.</p>
            </motion.div>
            <div className="timeline">
              {experienceData.map((exp, index) => (
                <motion.article key={exp.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={reveal} className="timeline-item reg-text">
                  <div className="timeline-index reg-text">0{index + 1}</div>
                  <div className="timeline-main reg-text">
                    <div className="timeline-top reg-text"><div><h3>{exp.company}</h3><span>{exp.roles}</span></div><p><time style={{ fontSize: "15px" }}>{exp.duration}</time></p></div>
                    <ul>{exp.description.map((d, i) => <li key={i}>{d}</li>)}</ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} className="section-heading">
            <span className="section-kicker">03 / TOOLKIT</span><h2>The stack behind the work.</h2><p>A practical toolkit spanning data engineering, cloud, development and AI.</p>
          </motion.div>
          <div className="skill-layout">
            <div className="skill-intro"><span>CORE STACK</span><strong>Build. Scale. Measure.</strong><p>Focused on systems that turn raw data into reliable, usable intelligence.</p></div>
            <div className="skill-cloud">{allSkills.map((skill, i) => <motion.span key={skill} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }} whileHover={{ y: -4, scale: 1.03 }}>{skill}</motion.span>)}</div>
          </div>
        </section>

        <section id="education" className="section section-muted">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} className="section-heading split"><div><span className="section-kicker">04 / EDUCATION</span><h2>Foundation + continuous learning.</h2></div><p>Academic background supporting a career across software, data and AI.</p></motion.div>
            <div className="education-grid">
              {educationData.map((edu) => <motion.article key={edu.id} whileHover={{ y: -5 }}><div className="edu-icon"><GraduationCap size={18} /></div><div><span style={{ fontSize: "13px" }}>{edu.duration}</span><h3>{edu.degree}</h3><p>{edu.school}</p><strong>{edu.marks}</strong></div></motion.article>)}
            </div>
            <div className="cert-strip reg-text"><span style={{ fontSize: "15px" }}>CERTIFICATIONS</span><div>{certificateData.slice(0, 6).map(c => <span key={c.id}>{c.name}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal} className="contact-card">
            <div><span className="section-kicker">05 / LET'S TALK</span><h2>Have a data problem worth solving?</h2><p>I'm open to conversations around Data Engineering, AI/ML and software engineering opportunities.</p></div>
            <div className="contact-actions"><a href={email} className="primary-btn">Email me <Mail size={16} /></a><a href={linkedin} target="_blank" rel="noreferrer" className="secondary-btn">LinkedIn <Linkedin size={16} /></a></div>
            <div className="contact-links"><a href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a><a href={resumePdf} target="_blank" rel="noreferrer"><Download size={16} />Download Resume</a></div>
          </motion.div>
        </section>
      </main>

      <footer className="footer"><div className="container"><span>© {new Date().getFullYear()} Vishwajeet Vijay Pawar</span><span>React · Framer Motion · Custom CSS</span></div></footer>
    </div>
  );
}

export default App;
