import React from 'react';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Technical Lead – Generative AI',
      company: 'Marlabs Innovation Pvt Ltd',
      period: 'Jun 2024 – Present',
      points: [
        'Designed & deployed production-grade agentic AI systems using LangGraph and LangChain.',
        'Built scalable REST APIs using FastAPI to expose LLM-powered services.',
        'Implemented RAG pipelines with ChromaDB and Pinecone, reducing hallucination rates by ~40%.',
        'Enabled secure LLM interaction with enterprise systems using MCP-based integrations.',
        'Implemented LLM observability pipelines using LangSmith to trace prompts and agent behavior.'
      ]
    },
    {
      role: 'Technical Lead – Machine Learning',
      company: 'Marlabs Innovation Pvt Ltd',
      period: 'Jan 2023 – May 2024',
      points: [
        'Developed and deployed machine learning models for classification and predictive analytics.',
        'Performed exploratory data analysis and feature engineering using Pandas and NumPy.',
        'Built ML workflows supporting financial risk prediction and operational analytics.',
        'Collaborated with engineering streams to integrate ML models into backend APIs.'
      ]
    },
    {
      role: 'Software Engineer – SDET',
      company: 'Testyantra Software Solutions',
      period: 'Sep 2021 – Dec 2022',
      points: [
        'Developed automation frameworks using Python, Selenium, and PyTest for UI and functional testing.',
        'Designed automated regression suites integrated with CI pipelines to improve release reliability.'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Experience</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              
              <div className={styles.timelineDot}>
                <Briefcase size={16} className={styles.icon} />
              </div>
              
              <div className={`${styles.timelineContent} glass`}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                
                <ul className={styles.pointsList}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
