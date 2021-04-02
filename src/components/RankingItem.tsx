import React, { useContext } from 'react'

import styles from '../styles/components/RankingItem.module.css'
import { Profile } from './Profile';

interface UserProps {
    userName: string,
    image: string;
    challengesCompleted: number;
    currentExperience: number;
}

interface RankingItemProps {
    user: UserProps
}

export default function RankingItem({ user }: RankingItemProps) {
    return (
        <article className={styles.container}>
            <div className={styles.left}>
                <span>1</span>
            </div>

            <div className={styles.right}>
                <div className={styles.profile}>
                    <Profile userData={{ userName: user.userName, image: user.image }} />
                </div>
                <div className={styles.challengesCompleted}>
                    <span className={styles.blue}> {user.challengesCompleted} </span> completados
                </div>
                <div className={styles.experience}>
                    <span className={styles.blue}> {user.currentExperience} </span> xp
                </div>
            </div>
        </article>
    )
}
