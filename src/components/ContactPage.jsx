import React, { useEffect } from 'react';
import { Mail, Phone, Download, ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'kumarprincesde@gmail.com',
      href: 'mailto:kumarprincesde@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-9840014256',
      href: 'tel:+919840014256',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={32} color="#0077B5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kumar-prince-1b86532a0',
    },
    {
      icon: <FaGithub size={32} color="var(--text-main)" />,
      label: 'GitHub',
      href: 'https://github.com/kumarprinceGenAI', // Placeholder for actual link
    },
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Kumar_Prince_Resume.pdf';
    link.setAttribute('download', 'Kumar_Prince_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="animate-fade-in container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.leftCol}>
          <h1 className={styles.sectionTitle}>Let's <span className="heading-gradient">Connect</span></h1>
          <p className={styles.description}>
            I'm always looking for interesting projects to work on and love to connect with like-minded individuals. 
            Whether you're interested in building Agentic RAG, scalable LLM pipelines, or just want to chat about AI—feel free to reach out.
          </p>

          <div className={styles.contactList}>
            {contactLinks.map((link, index) => (
              <a key={index} href={link.href} className={`${styles.contactCard} glass`}>
                <div className={styles.iconBox}>{link.icon}</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{link.label}</span>
                  <span className={styles.cardValue}>{link.value}</span>
                </div>
                <ExternalLink size={18} className={styles.arrow} />
              </a>
            ))}
          </div>

          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`${styles.socialCard} glass`}>
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={`${styles.resumeBox} glass`}>
            <div className={styles.resumeHeader}>
              <h2 className={styles.resumeTitle}>My Professional Resume</h2>
              <div className={styles.tag}>PDF FORMAT</div>
            </div>
            
            <p className={styles.resumeText}>
              A detailed one-page overview of my expertise in **LangGraph**, **FastAPI**, **Machine Learning**, 
              and over 4.5 years of industry experience.
            </p>

            <ul className={styles.featureList}>
              <li>Focused on Generative AI & RAG</li>
              <li>Comprehensive technical project list</li>
              <li>Modern clean layout for quick review</li>
            </ul>

            <button 
              onClick={handleDownload}
              className={styles.downloadBtn}
              style={{ width: '100%', border: 'none', cursor: 'pointer' }}
            >
              <Download size={20} /> Download Official Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
