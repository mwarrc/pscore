"use client";

import React from 'react';
import { GitHubRelease } from '../../lib/github';
import { Card } from '../Card';
import { Button } from '../Button';
import styles from './ReleaseList.module.css';

interface ReleaseListProps {
    releases: GitHubRelease[];
}

export const ReleaseList: React.FC<ReleaseListProps> = ({ releases }) => {
    if (!releases || releases.length === 0) {
        return <p className={styles.empty}>No releases found.</p>;
    }

    return (
        <div className={styles.container}>
            <h2 className="m3-headline-medium">Latest Releases</h2>
            <div className={styles.grid}>
                {releases.map((release) => (
                    <Card key={release.tag_name} variant="outlined" className={styles.releaseCard}>
                        <div className={styles.header}>
                            <span className={styles.tag}>{release.tag_name}</span>
                            <span className={styles.date}>
                                {new Date(release.published_at).toLocaleDateString()}
                            </span>
                        </div>
                        <h3 className={styles.title}>{release.name || release.tag_name}</h3>
                        <p className={styles.description}>
                            {release.body?.slice(0, 150)}...
                        </p>
                        <div className={styles.actions}>
                            {release.assets && release.assets.length > 0 && (
                                <Button
                                    variant="primary"
                                    onClick={() => window.open(release.assets[0].browser_download_url)}
                                >
                                    Download APK
                                </Button>
                            )}
                            <Button
                                variant="text"
                                onClick={() => window.open(release.html_url)}
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
