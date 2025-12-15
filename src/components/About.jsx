import React from 'react';
import styles from './About.module.css';

const skills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express',
    'Java',
    'Spring Boot',
    'Typescript',
    'Angular',
];

function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>

                {/* Coluna da Esquerda: Texto */}
                <div className={styles.textColumn}>
                    <h2 className={styles.title}>Sobre Mim</h2>
                    <p className={styles.description}>
                        Olá! Sou um desenvolvedor web apaixonado por criar interfaces
                        intuitivas e sistemas eficientes. Meu foco é usar tecnologias
                        modernas para construir aplicações rápidas, responsivas e escaláveis.
                        <br /><br />
                        Estou sempre aprendendo e me adaptando às novas ferramentas do
                        mercado, pronto para transformar ideias complexas em realidade digital.
                    </p>
                </div>

                {/* Coluna da Direita: Skills */}
                <div className={styles.skillsColumn}>
                    <h3 className={styles.title}>Tecnologias</h3>
                    <ul className={styles.skillsList}>
                        {skills.map((skill) => (
                            <li key={skill} className={styles.skillItem}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default About;