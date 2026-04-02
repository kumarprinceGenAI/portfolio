import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Generative AI',
      skills: ['LangGraph', 'LangChain', 'MCP', 'LangSmith', 'Prompt Engineering', 'Agentic AI', 'RAG']
    },
    {
      title: 'Backend & Data',
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas', 'NumPy']
    },
    {
      title: 'Vector Databases',
      skills: ['ChromaDB', 'Pinecone', 'FAISS', 'PGVector']
    },
    {
      title: 'ML & Infrastructure',
      skills: ['Machine Learning', 'Neural Networks', 'Docker', 'CI/CD Pipelines']
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.skillCategory} glass`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.chipsContainer}>
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
