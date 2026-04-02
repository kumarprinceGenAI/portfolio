import React from 'react';
import { FaYoutube, FaBlog } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import styles from './Hobbies.module.css';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'The Traveling Prince',
      type: 'YouTube Channel',
      icon: <FaYoutube size={32} color="#FF0000" />,
      description: 'Documenting my travel adventures around the globe. Join me as I explore new cultures, landscapes, and experiences off the keyboard.',
      link: 'https://www.youtube.com/@thetravelingprince4'
    },
    {
      title: 'Travel & Lifestyle Blog',
      type: 'Personal Blog',
      icon: <FaBlog size={30} color="var(--accent-cyan)" />,
      description: 'A deeper dive into my personal thoughts, travel itineraries, and photography. A space where I drop the code and pick up the pen.',
      link: 'https://thetravelingprince.wuaze.com/'
    }
  ];

  return (
    <section id="hobbies" className={styles.hobbiesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Beyond The Keyboard</h2>
        <p className={styles.sectionSubtitle}>
          While I thrive on building cutting-edge AI systems professionally, I also love stepping away from the screen to explore the world. Here are my passion projects!
        </p>

        <div className={styles.hobbiesGrid}>
          {hobbies.map((hobby, index) => (
            <div key={index} className={`${styles.hobbyCard} glass`}>
              <div className={styles.iconWrapper}>
                {hobby.icon}
              </div>
              <div className={styles.content}>
                <span className={styles.hobbyType}>{hobby.type}</span>
                <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
                <p className={styles.hobbyDesc}>{hobby.description}</p>
              </div>
              <a 
                href={hobby.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.visitBtn}
              >
                Explore <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
