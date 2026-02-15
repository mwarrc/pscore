"use client";

import React from 'react';
import { Card } from '../Card';
import styles from './Projects.module.css';

const OTHER_PROJECTS = [
    {
        name: "ProxySet",
        description: "Advanced proxy management and testing suite.",
        url: "https://github.com/mwarrc/proxyset",
        tag: "Tooling"
    },
    {
        name: "Portfolio",
        description: "Personal space showcasing work and experiments.",
        url: "https://mwarrc.github.io",
        tag: "Web"
    }
];

export const Projects: React.FC = () => {
    return (
        <section className={styles.section}>
            <h2 className="m3-label-medium">More Projects</h2>
            <div className={styles.grid}>
                {OTHER_PROJECTS.map((project) => (
                    <Card
                        key={project.name}
                        variant="outlined"
                        className={styles.projectCard}
                    >
                        <div className={styles.content} onClick={() => window.open(project.url, '_blank')}>
                            <div className={styles.header}>
                                <span className={styles.projectTag}>{project.tag}</span>
                                <h3 className={styles.projectName}>{project.name}</h3>
                            </div>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.arrow}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
