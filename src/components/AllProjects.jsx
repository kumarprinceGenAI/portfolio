import React, { useEffect } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allPersonalProjects = [
    {
      title: 'Enterprise HR AI Assistant',
      description: 'An intelligent RAG-based AI assistant built for internal HR workflows. Features role-based access control (RBAC), capable agents orchestrating queries using LangGraph, and automated onboarding routines. Open for testing and feedback!',
      tech: ['Python', 'LangGraph', 'Qdrant', 'Docker'],
      link: 'https://hr-ai-assistant-qr7n.onrender.com',
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
    },
    {
      title: 'Restrosol Job Board',
      description: 'A premier hospitality job board platform connecting top hotels and restaurants with industry talent. Developed responsive, performant user interfaces to streamline the hiring process for hospitality professionals.',
      tech: ['Next.js', 'React', 'TailwindCSS', 'Firebase'],
      link: 'https://jobs.restrosol.com/',
      github: '#'
    },
    // You can add many more personal projects here
  ];

  return (
    <main className="animate-fade-in container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <h1 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>All Open Source & Personal Projects</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Here is a complete list of my side-projects and experiments. Most of these are connected to Generative AI, MLOps, and modern full-stack engineering.
      </p>

      <div className={styles.projectsGrid}>
        {allPersonalProjects.map((project, index) => (
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
        ))}
      </div>
    </main>
  );
};

export default AllProjects;
