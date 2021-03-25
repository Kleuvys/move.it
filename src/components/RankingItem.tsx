import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/RankingItem.module.css'
import { Profile } from './Profile';

export default function RankingItem() {
    const { challengesCompleted, currentExperience } = useContext(ChallengesContext);

    return (
        <article className={styles.container}>
            <div className={styles.left}>
                <span>1</span>
            </div>

            <div className={styles.right}>
                <div className={styles.profile}>
                    <Profile />
                </div>
                <div className={styles.challengesCompleted}>
                    <span className={styles.blue}> 12 </span> completados
                </div>
                <div className={styles.experience}>
                    <span className={styles.blue}> 1135124 </span> xp
                </div>
            </div>
        </article>
    )
}
