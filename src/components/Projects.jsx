import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Projects = () => {
  const professionalProjects = [
    {
      title: 'Trade & Compliance Intelligence Engine',
      description: 'An agentic AI platform using LangGraph orchestrating multi-step reasoning workflows for enterprise knowledge retrieval and compliance validation. Integrated enterprise tools via MCP-based architecture.',
      tech: ['LangGraph', 'FastAPI', 'RAG', 'ChromaDB', 'MCP'],
      link: '#',
      github: '#'
    },
    {
      title: 'Loan Deficiency Risk Prediction',
      description: 'Developed machine learning models for predicting loan deficiency risk using structured financial datasets. Built data pipelines for continuous model training and scoring to support early risk detection.',
      tech: ['Python', 'Pandas', 'Machine Learning'],
      link: '#',
      github: '#'
    },
    {
      title: 'Banfield Mobile Appointment',
      description: 'Created an automated testing framework for mobile veterinary appointment booking workflows, enabling automated regression suites covering scheduling, authentication, and service flows.',
      tech: ['Python', 'Selenium', 'Automation'],
      link: '#',
      github: '#'
    }
  ];

  const personalProjects = [
    {
      title: 'Enterprise HR AI Assistant',
      description: 'An intelligent RAG-based AI assistant built for internal HR workflows. Features role-based access control (RBAC), capable agents orchestrating queries using LangGraph, and automated onboarding routines. Open for testing and feedback!',
      tech: ['Python', 'LangGraph', 'Qdrant', 'Docker'],
      link: 'https://hr-ai-assistant-qr7n.onrender.com', // Updated to working link
      github: 'https://github.com/kumarprinceGenAI/HR-AI-assistant'
    },
    {
      title: 'Agentic RAG Knowledge Base',
      description: 'A comprehensive retrieval-augmented generation document assistant that automatically updates its own vector index based on GitHub commits and webhooks.',
      tech: ['React', 'FastAPI', 'Pinecone', 'OpenAI'],
      link: '#',
      github: '#'
    },
    {
      title: 'Fine-Tuned Code Assistant',
      description: 'A custom-trained language model optimized specifically to write robust unit tests and suggest architecture refactors within complex enterprise repositories.',
      tech: ['PyTorch', 'HuggingFace', 'LoRA'],
      link: '#',
      github: '#'
    }
  ];

  const renderProjectCard = (project, index) => (
    <div key={index} className={`${styles.projectCard} glass`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.cardLinks}>
          <a 
            href={project.github} 
            target={project.github !== '#' ? '_blank' : undefined} 
            rel={project.github !== '#' ? 'noopener noreferrer' : undefined} 
            className={styles.linkIcon} 
            aria-label="Github"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={project.link} 
            target={project.link !== '#' ? '_blank' : undefined} 
            rel={project.link !== '#' ? 'noopener noreferrer' : undefined} 
            className={styles.linkIcon} 
            aria-label="External Link"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <p className={styles.projectDescription}>{project.description}</p>
      
      <div className={styles.cardFooter}>
        <div className={styles.techStack}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techBubble}>{tech}</span>
          ))}
        </div>
        {project.link !== '#' && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.exploreBtn}
          >
            Explore
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        
        <div className={styles.projectsGrid}>
          {professionalProjects.map(renderProjectCard)}
        </div>

        <div className={styles.subSection}>
          <div className={styles.subSectionHeader}>
            <h3 className={styles.subSectionTitle}>Personal & Open Source</h3>
            <p className={styles.subSectionDesc}>
              A space where I share updates on my public side-projects. Feel free to explore the code, experiment with the live demos, and check out my latest contributions.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {personalProjects.map(renderProjectCard)}
          </div>
          
          <div className={styles.viewMoreContainer}>
            <Link to="/all-projects" className={styles.viewMoreBtn}>
              View More Projects &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
