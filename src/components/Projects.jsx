// src/components/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';

// ===================================================================
// DADOS DOS SEUS PROJETOS (Edite aqui!)
// ===================================================================

const projectsData = [
    {
        title: 'Landing Page Autoescola', // Título do Projeto
        image: '/drivetech.png', // Link da imagem (ou coloque um arquivo na pasta public e use '/foto.jpg')
        description: 'Página web responsiva criada com React, Node.js e Bootstrap para um trabalho da faculdade.',
        demoUrl: 'https://drivetech-website.vercel.app/',  // Link para ver o site funcionando
        githubUrl: 'https://github.com/Silvarawenne/drivetech-website' // Link do GitHub
    },
    {
        title: 'HelpDesk Full-Stack',
        image: '/image.png',
        description: 'Sistema completo de chamados usando Angular no front-end e Java Spring Boot no back-end.',
        demoUrl: 'https://helpdeskprojectfrontend.vercel.app/login',
        githubUrl: 'https://github.com/Silvarawenne/helpdeskprojectfrontend'
    },
    // Se quiser adicionar mais um projeto, basta copiar e colar o bloco { ... } aqui
];

// ===================================================================

function Projects() {
    return (
        // O ID abaixo permite que o botão "Veja meus projetos" funcione
        <section id="projects-section" className={styles.projectsSection}>

            <h2 className={styles.title}>Meus Projetos</h2>

            <div className={styles.grid}>
                {/* Aqui o React cria um cartão para cada projeto da lista acima */}
                {projectsData.map((project, index) => (

                    <div key={index} className={styles.card}>
                        {/* Imagem */}
                        <img
                            src={project.image}
                            alt={`Screenshot de ${project.title}`}
                            className={styles.screenshot}
                        />

                        <div className={styles.content}>
                            {/* Título */}
                            <h3 className={styles.projectTitle}>{project.title}</h3>

                            {/* Descrição */}
                            <p className={styles.description}>{project.description}</p>

                            {/* Botões */}
                            <div className={styles.links}>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkButton}
                                >
                                    Demo ao Vivo
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.linkButton} ${styles.secondary}`}
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    );
}

export default Projects;