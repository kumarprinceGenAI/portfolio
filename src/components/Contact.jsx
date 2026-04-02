import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>
        
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.description}>
            Currently open for new opportunities to build state-of-the-art AI solutions. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className={styles.contactLinks}>
            <a href="mailto:kumarprincesde@gmail.com" className={styles.contactItem}>
              <Mail size={24} className={styles.icon} />
              <span>kumarprincesde@gmail.com</span>
            </a>
            
            <a href="tel:+919840014256" className={styles.contactItem}>
              <Phone size={24} className={styles.icon} />
              <span>+91-9840014256</span>
            </a>
          </div>
          
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/kumar-prince-1b86532a0" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/kumarprinceGenAI" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        <div className={styles.educationBlock}>
          <h3 className={styles.eduTitle}>Education Journey</h3>
          
          <div className={`${styles.eduCard} glass`}>
            <h4 className={styles.degree}>Bachelor of Technology</h4>
            <h5 className={styles.university}>Annamalai University</h5>
            <span className={styles.year}>2012 – 2016</span>
          </div>
        </div>

      </div>
      
      <div className={styles.bottomBar}>
        <p>Designed and developed by <a href="https://www.youtube.com/@thetravelingprince4" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 'bold'}}>The Traveling Prince</a></p>
      </div>
    </footer>
  );
};

export default Contact;
