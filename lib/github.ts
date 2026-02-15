export interface GitHubRelease {
    tag_name: string;
    name: string;
    published_at: string;
    body: string;
    html_url: string;
    assets: {
        name: string;
        browser_download_url: string;
        size: number;
    }[];
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
    try {
        const response = await fetch(
            'https://api.github.com/repos/mwarrc/PocketScore/releases/latest',
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch release: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub release:', error);
        return null;
    }
}

export async function getLatestApkUrl(): Promise<string> {
    const release = await getLatestRelease();
    if (release && release.assets && release.assets.length > 0) {
        // Find the first .apk asset
        const apkAsset = release.assets.find(asset => asset.name.endsWith('.apk'));
        return apkAsset ? apkAsset.browser_download_url : release.html_url;
    }
    return 'https://github.com/mwarrc/PocketScore/releases/latest';
}

export async function getAllReleases(): Promise<GitHubRelease[]> {
    try {
        const response = await fetch(
            'https://api.github.com/repos/mwarrc/PocketScore/releases',
            {
                next: { revalidate: 3600 },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch releases: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub releases:', error);
        return [];
    }
}

export interface GitHubContent {
    name: string;
    path: string;
    download_url: string;
    type: string;
}

export async function getScreenshots(): Promise<GitHubContent[]> {
    try {
        const response = await fetch(
            'https://api.github.com/repos/mwarrc/PocketScore/contents/Extras/screenshots',
            {
                next: { revalidate: 3600 },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch screenshots: ${response.statusText}`);
        }

        const contents: GitHubContent[] = await response.json();
        // Filter to only include image files
        return contents.filter(item =>
            item.type === 'file' &&
            (item.name.endsWith('.png') || item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.webp'))
        );
    } catch (error) {
        console.error('Error fetching screenshots from GitHub:', error);
        return [];
    }
}

export async function getChangelog(): Promise<string> {
    try {
        const response = await fetch(
            'https://raw.githubusercontent.com/mwarrc/PocketScore/master/CHANGELOG.md',
            {
                next: { revalidate: 3600 },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch changelog: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching changelog from GitHub:', error);
        return 'Failed to load changelog.';
    }
}
