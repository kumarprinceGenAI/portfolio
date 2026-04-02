import React, { useEffect } from 'react';
import { Download, Phone, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Resume.module.css';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.resumePage}>
      {/* Dynamic Controls - Hidden during print */}
      <div className={styles.controls}>
        <button onClick={handlePrint} className={styles.printBtn}>
          <Download size={20} /> Save as PDF
        </button>
        <p className={styles.printHint}>Tip: Set destination to "Save as PDF" and layout to "Portrait"</p>
      </div>

      <div className={styles.resumeContainer}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.nameBlock}>
            <h1 className={styles.name}>Kumar Prince</h1>
            <h2 className={styles.title}>Generative AI / Machine Learning Engineer</h2>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.contactRow}>
              <Phone size={14} /><span>+91-9840014256</span>
            </div>
            <div className={styles.contactRow}>
              <Mail size={14} /><span>kumarprincesde@gmail.com</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>SUMMARY</h3>
          <p className={styles.summary}>
            ML/Generative AI Engineer with 4.5 years of experience designing and deploying production-grade AI systems. 
            Specialized in agentic AI architectures, **Retrieval-Augmented Generation (RAG)**, and scalable LLM-powered 
            APIs using **LangGraph**, **LangChain**, **MCP**, and **LangSmith**.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>TECHNICAL SKILLS</h3>
          <div className={styles.skillsTable}>
            <div className={styles.skillRow}>
              <strong>Languages:</strong> <span>Python</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Generative AI:</strong> <span>LangGraph, LangChain, MCP, LangSmith, Prompt Engineering, Agentic AI Systems, RAG</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Machine Learning:</strong> <span>Machine Learning, Neural Networks, Model Evaluation, Feature Engineering</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Backend & APIs:</strong> <span>FastAPI</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Databases:</strong> <span>PostgreSQL</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Vector Databases:</strong> <span>FAISS, ChromaDB, Pinecone, PGVector</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Data Processing:</strong> <span>Pandas, NumPy</span>
            </div>
            <div className={styles.skillRow}>
              <strong>Infrastructure:</strong> <span>Docker, CI/CD Pipelines</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>EXPERIENCE</h3>
          
          <div className={styles.experienceItem}>
            <div className={styles.expHeader}>
              <div>
                <strong className={styles.role}>Technical Lead – Generative AI</strong>
                <span className={styles.company}> | Marlabs Innovation Pvt Ltd</span>
              </div>
              <span className={styles.date}>Jun 2024 – Present</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Designed and deployed production-grade agentic AI systems using **LangGraph** and **LangChain** to enable multi-agent workflows for enterprise knowledge retrieval and decision automation.</li>
              <li>Built scalable REST APIs using **FastAPI** to expose LLM-powered services and integrate AI capabilities with enterprise applications.</li>
              <li>Implemented **RAG** pipelines using **vector databases** such as ChromaDB and Pinecone to improve response accuracy and reduce hallucination rates by ~40%.</li>
              <li>Enabled secure LLM interaction with enterprise systems using **MCP**-based integrations for tool usage, API orchestration, and data retrieval.</li>
              <li>Implemented LLM observability pipelines using **LangSmith** to trace prompts, monitor agent behavior, and improve response quality.</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.expHeader}>
              <div>
                <strong className={styles.role}>Technical Lead – Machine Learning</strong>
                <span className={styles.company}> | Marlabs Innovation Pvt Ltd</span>
              </div>
              <span className={styles.date}>Jan 2023 – May 2024</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Developed and deployed machine learning models for classification and predictive analytics across enterprise datasets.</li>
              <li>Performed exploratory data analysis, feature engineering, and preprocessing using Pandas and NumPy.</li>
              <li>Built ML workflows supporting financial risk prediction and operational analytics.</li>
              <li>Collaborated with engineering teams to integrate ML models into backend systems via API-based services.</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.expHeader}>
              <div>
                <strong className={styles.role}>Software Engineer – SDET</strong>
                <span className={styles.company}> | Testyantra Software Solutions</span>
              </div>
              <span className={styles.date}>Sep 2021 – Dec 2022</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Developed automation frameworks using **Python**, Selenium, and PyTest for UI and functional testing of enterprise web applications.</li>
              <li>Designed automated regression suites integrated with CI pipelines to improve release reliability and reduce manual testing effort.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>PROJECTS</h3>
          
          <div className={styles.projectItem}>
            <strong className={styles.projectName}>Trade & Compliance Intelligence Engine</strong>
            <ul className={styles.bulletList}>
              <li>Designed an agentic AI platform using **LangGraph** to orchestrate multi-step reasoning workflows for enterprise knowledge retrieval and compliance validation.</li>
              <li>Implemented **RAG** pipelines using **vector databases** (ChromaDB / Pinecone) to retrieve domain-specific financial documents and improve factual response accuracy.</li>
              <li>Built **FastAPI**-based services exposing LLM-powered APIs enabling integration with enterprise systems.</li>
              <li>Integrated enterprise tools and APIs through **MCP**-based architecture enabling dynamic tool usage within LLM agent workflows.</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <strong className={styles.projectName}>Loan Deficiency Risk Prediction System</strong>
            <ul className={styles.bulletList}>
              <li>Developed machine learning models for predicting loan deficiency risk using structured financial datasets.</li>
              <li>Performed feature engineering and preprocessing using Pandas and NumPy to improve model predictive performance.</li>
              <li>Built data pipelines for model training, evaluation, and scoring to support early risk detection.</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <strong className={styles.projectName}>Banfield Mobile Appointment Platform</strong>
            <ul className={styles.bulletList}>
              <li>Developed an automated testing framework using **Python** and Selenium for mobile veterinary appointment booking workflows.</li>
              <li>Designed automated regression suites covering appointment scheduling, authentication, and service booking flows.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>EDUCATION</h3>
          <p className={styles.education}>
            Bachelor of Technology (2012 – 2016) – Annamalai University
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
