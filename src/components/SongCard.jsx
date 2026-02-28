import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Music } from 'lucide-react';
import { getAlbumArt } from '../lib/itunes'; // iTunes 검색 함수
import styles from './SongCard.module.css';

export default function SongCard({ song, index }) {
    const [albumArt, setAlbumArt] = useState(null);

    useEffect(() => {
        let isMounted = true;
        if (song) {
            getAlbumArt(song.artist, song.title).then(url => {
                if (isMounted) setAlbumArt(url);
            });
        }
        return () => { isMounted = false; };
    }, [song]);

    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song.youtube_url || `${song.artist} ${song.title}`)}`;

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <div className={styles.albumArtPlaceholder}>
                {albumArt ? (
                    <img src={albumArt} alt={song.title} className={styles.albumArt} />
                ) : (
                    <Music size={24} className={styles.musicIcon} />
                )}
            </div>

            <div className={styles.infoSection}>
                <h3 className={styles.title}>{song.title}</h3>
                <p className={styles.artist}>{song.artist}</p>
                <p className={styles.reason}>{song.reason}</p>
            </div>

            <a
                href={youtubeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.playBtn}
                title="유튜브에서 재생"
            >
                <Play size={20} fill="currentColor" />
            </a>
        </motion.div>
    );
}