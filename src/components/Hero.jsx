import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const [loadText, setLoadText] = useState('');
  const fullText = "Initializing GenAI Engine... System Online.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setLoadText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.heroContent}>
          <div className={`${styles.terminalBadge} glass`}>
            <Terminal size={14} className={styles.icon} />
            <span className={styles.terminalText}>{loadText}</span>
            <span className={styles.cursor}>|</span>
          </div>
          
          <h1 className={styles.title}>
            Hi, I'm <span className="heading-gradient">Kumar Prince</span>
          </h1>
          
          <h2 className={styles.subtitle}>
            Generative AI <span className={styles.separator}>&</span> Machine Learning Engineer
          </h2>
          
          <p className={styles.description}>
            With 4.5+ years of experience architecting and deploying production-grade 
            agentic AI systems. Specialized in LLM-powered APIs, Retrieval-Augmented 
            Generation (RAG), and multi-agent workflows.
          </p>
          
          <div className={styles.actionGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              Explore Projects <ArrowRight size={18} />
            </a>
            <Link to="/contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageGlow}></div>
          <div className={styles.imageWrapper}>
             <img src="/profile.png" alt="Kumar Prince" className={styles.profileImg} />
             
             {/* Decorative UI elements floating around */}
             <div className={`${styles.floatingElement} ${styles.float1} glass`}>
                LangGraph
             </div>
             <div className={`${styles.floatingElement} ${styles.float2} glass`}>
                RAG Architecture
             </div>
             <div className={`${styles.floatingElement} ${styles.float3} glass`}>
                FastAPI
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
