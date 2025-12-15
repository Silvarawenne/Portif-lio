import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <footer className={styles.contactSection}>
            <h2 className={styles.title}>Vamos Conversar?</h2>
            <p className={styles.subTitle}>
                Estou sempre aberto a novas oportunidades e conexões.
                Sinta-se à vontade para entrar em contato.
            </p>

            <div className={styles.linksContainer}>
                <a
                    href="https://www.linkedin.com/in/rawenne-leite-566919298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/Silvarawenne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                >
                    GitHub
                </a>
                <a
                    href="mailto:rawenne.dev@gmail.com"
                    className={styles.linkButton}
                >
                    E-mail
                </a>
            </div>

            <p className={styles.footerText}>
                © 2025 - Desenvolvido com React por Rawenne Leite.
            </p>
        </footer>   
    );
}

export default Contact;