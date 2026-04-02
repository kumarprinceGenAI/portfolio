import React from 'react';
import { Target, Cpu, Server } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      icon: <Cpu size={28} className={styles.highlightIcon} />,
      title: 'Agentic Systems',
      desc: 'Architecting multi-agent workflows using LangGraph and LangChain for enterprise automation.',
    },
    {
      icon: <Server size={28} className={styles.highlightIcon} />,
      title: 'Scalable APIs',
      desc: 'Building robust LLM-powered Microservices with FastAPI and vector databases.',
    },
    {
      icon: <Target size={28} className={styles.highlightIcon} />,
      title: 'RAG Accuracy',
      desc: 'Optimizing retrieval pipelines to cut hallucination rates and increase decision reliability.',
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        
        <div className={styles.aboutHeaders}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={`${styles.aboutCard} glass`}>
            <p>
              I am a Generative AI & Machine Learning Engineer with <strong>4.5 years of experience</strong> designing and deploying 
              production-grade AI systems. I specialize in bridging the gap between cutting-edge LLM capabilities 
              and enterprise requirements.
            </p>
            <p>
              My expertise lies deeply in <strong>RAG (Retrieval-Augmented Generation)</strong>, building 
              autonomous agent architectures with <strong>LangGraph</strong> and <strong>LangChain</strong>, and orchestrating 
              secure tool usage via <strong>Model Context Protocol (MCP)</strong>. I am passionate about creating systems 
              that can reason, retrieve knowledge safely, and integrate flawlessly via robust FastAPI backends.
            </p>
          </div>
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((item, index) => (
            <div key={index} className={`${styles.highlightBox} glass`}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.boxTitle}>{item.title}</h3>
              <p className={styles.boxDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default About;
