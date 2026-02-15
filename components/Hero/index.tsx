"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import Image from 'next/image';
import styles from './Hero.module.css';
import { GitHubContent } from '../../lib/github';

interface HeroProps {
    screenshots?: GitHubContent[];
    apkUrl?: string;
    version?: string;
}

export const Hero: React.FC<HeroProps> = ({ screenshots = [], apkUrl = '', version = '' }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (screenshots.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
            }, 4000); // Change every 4 seconds
            return () => clearInterval(interval);
        }
    }, [screenshots.length]);

    const handleDownload = () => {
        window.open(apkUrl || 'https://github.com/mwarrc/PocketScore/releases/latest', '_blank');
    };

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {version && <div className={styles.badge}>PocketScore {version}</div>}

                <div className={styles.brandHero}>
                    <div className={styles.appIconWrapper}>
                        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.appIcon}>
                            <rect width="32" height="32" rx="8" fill="var(--primary)" />
                            <path
                                d="M9,8h14c1.1,0 2,0.9 2,2v7c0,5.5 -4.5,9 -9,9s-9,-3.5 -9,-9V10c0,-1.1 0.9,-2 2,-2zM13,12v6h1v-6h-1zM15,12v6h1v-6h-1zM17,12v6h1v-6h-1zM19,12v6h1v-6h-1zM10.5,17.5l9,-5l0.5,0.9l-9,5L10.5,17.5z"
                                fill="white"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h1 className="m3-display-large">Smart Scorekeeping for Modern Games</h1>
                </div>

                <p className="m3-body-large">
                    PocketScore is a modern, expressive, and user-friendly score-keeping
                    application for Android. Experience seamless game nights with
                    real-time insights and beautiful Material 3 design.
                </p>
                <div className={styles.actions}>
                    <Button variant="primary" onClick={handleDownload} className={styles.downloadCall}>
                        Download APK
                    </Button>
                    <Button variant="outlined" onClick={() => window.open('https://github.com/mwarrc/PocketScore')}>
                        View Source
                    </Button>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.deviceFrame}>
                    <div className={styles.mockScreen}>
                        {screenshots.length > 0 ? (
                            <div className={styles.imageWrapper}>
                                {screenshots.map((s, i) => (
                                    <Image
                                        key={s.path}
                                        src={s.download_url}
                                        alt={s.name}
                                        fill
                                        className={`${styles.screenshot} ${i === currentImageIndex ? styles.active : ''}`}
                                        unoptimized
                                    />
                                ))}
                                <div className={styles.screenOverlay}></div>
                            </div>
                        ) : (
                            <div className={styles.defaultScreen}>
                                <div className={styles.statusIcons}></div>
                                <div className={styles.appTitle}>PocketScore</div>
                                <div className={styles.scoreGrid}>
                                    <div className={styles.scoreItem}></div>
                                    <div className={styles.scoreItem}></div>
                                    <div className={styles.scoreItem}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
