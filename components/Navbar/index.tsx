"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

interface NavbarProps {
    apkUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ apkUrl = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`m3-container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIconWrapper}>
                        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9,8h14c1.1,0 2,0.9 2,2v7c0,5.5 -4.5,9 -9,9s-9,-3.5 -9,-9V10c0,-1.1 0.9,-2 2,-2zM13,12v6h1v-6h-1zM15,12v6h1v-6h-1zM17,12v6h1v-6h-1zM19,12v6h1v-6h-1zM10.5,17.5l9,-5l0.5,0.9l-9,5L10.5,17.5z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span>PocketScore</span>
                </Link>

                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className={`${styles.links} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/changelog" className={styles.link} onClick={() => setIsMenuOpen(false)}>Changelog</Link>
                    <Link href="/screenshots" className={styles.link} onClick={() => setIsMenuOpen(false)}>Screenshots</Link>
                    <Link href="/#releases" className={styles.link} onClick={() => setIsMenuOpen(false)}>Releases</Link>
                    <a href="https://github.com/mwarrc/PocketScore" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <button
                        className={styles.downloadBtn}
                        onClick={() => {
                            window.open(apkUrl || 'https://github.com/mwarrc/PocketScore/releases/latest', '_blank');
                            setIsMenuOpen(false);
                        }}
                    >
                        Download APK
                    </button>
                </div>
            </div>
        </nav>
    );
};
