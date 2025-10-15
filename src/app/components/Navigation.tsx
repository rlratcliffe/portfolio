'use client';

import styles from "./Navigation.module.css";

export default function Navigation() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={styles.navLink}
                >
                    Projects
                </button>
                <button
                    onClick={() => scrollToSection('open-source')}
                    className={styles.navLink}
                >
                    Open Source
                </button>
            </div>
        </nav>
    );
}
