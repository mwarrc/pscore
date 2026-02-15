import { getScreenshots, getLatestApkUrl } from "../../lib/github";
import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import Image from "next/image";
import styles from "./screenshots.module.css";

export default async function ScreenshotsPage() {
    const screenshots = await getScreenshots();
    const apkUrl = await getLatestApkUrl();

    return (
        <div className="page-transition">
            <main>
                <Navbar apkUrl={apkUrl} />
                <div className="m3-container">
                    <header className={styles.header}>
                        <h1 className="m3-display-large">Screenshots</h1>
                        <p className="m3-body-large">A glimpse into the expressive UI of PocketScore.</p>
                    </header>

                    {screenshots.length === 0 ? (
                        <p className={styles.empty}>No screenshots found in GitHub repository.</p>
                    ) : (
                        <div className={styles.grid}>
                            {screenshots.map((s, i) => (
                                <Card key={s.path} variant="filled" className={styles.screenshotCard}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={s.download_url}
                                            alt={s.name}
                                            width={500}
                                            height={1000}
                                            className={styles.image}
                                            unoptimized
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <h3 className="m3-headline-medium">{s.name.replace(/\.[^/.]+$/, "").replace(/-/g, " ")}</h3>
                                        <span className="m3-label-medium">Material 3 UI</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
