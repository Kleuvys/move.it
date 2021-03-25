import React from 'react';

import styles from '../styles/components/Ranking.module.css';
import RankingItem from './RankingItem';

export default function Ranking() {
    return (
        <section className={styles.container}>
            <div className={styles.boardTitlesContainer}>
                <span className={styles.positionTitle}>POSIÇÃO</span>
                <span className={styles.userTitle}>USUÁRIO</span>
                <span className={styles.challengesTitle}>DESAFIOS</span>
                <span className={styles.experienceTitle}>EXPERIÊNCIA</span>
            </div>
            <RankingItem />
            <RankingItem />
            <RankingItem />
            <RankingItem />
        </section>
    )
}
