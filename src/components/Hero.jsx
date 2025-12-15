import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
        
      <img src='/Rawenne.jpg' alt='Foto do perfil' className={styles.profileImage} />

      <h1 className={styles.headline}>
        Olá, eu sou Rawenne Leite.
      </h1>

      <p className={styles.subheadline}>
        Eu crio soluções web completas e de alta performance. Do design da interface até a arquitetura do banco de dados, eu transformo suas necessidades em código limpo e funcional.
      </p>

      <a href="#projects-section" className={styles.ctaButton} onClick={(e) => {
        e.preventDefault(); 
        scrollToProjects();
      }}>
        Veja meus projetos
      </a>
    </section>
  );
}

export default Hero;