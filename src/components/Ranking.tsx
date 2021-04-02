import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';

import styles from '../styles/components/Ranking.module.css';
import RankingItem from './RankingItem';

type Player = {
    userName: string;
    image: string;
    challengesCompleted: number;
    currentExperience: number;
}

interface RankingProps {
    username?: string;
    players?: Player[];
}

export default function Ranking({ username, players }: RankingProps) {

    //const [players, setPlayers] = useState<Player[]>([{} as Player]);

    /* useEffect(() => {
        //fetch players


    }, [players]); */

    return (
        <section className={styles.container}>
            <div className={styles.boardTitlesContainer}>
                <span className={styles.positionTitle}>POSIÇÃO</span>
                <span className={styles.userTitle}>USUÁRIO</span>
                <span className={styles.challengesTitle}>DESAFIOS</span>
                <span className={styles.experienceTitle}>EXPERIÊNCIA</span>
            </div>

            {players.map((player) => {
                const { userName, image, currentExperience, challengesCompleted } = player;
                return (
                    <RankingItem user={{
                        userName,
                        image,
                        currentExperience,
                        challengesCompleted
                    }} />
                )
            })}

        </section>
    )
}

//Can we use getStaticProps? ;/

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { username } = ctx.req.cookies;
    //fetch players from JSON
    const players = [{
        userName: 'keke',
        image: 'https://avatars.githubusercontent.com/u/43152383?s=460&v=4',
        challengesCompleted: 2,
        currentExperience: 100,
    },
    {
        userName: 'vanessinha',
        image: 'https://avatars.githubusercontent.com/u/43152383?s=460&v=4',
        challengesCompleted: 50,
        currentExperience: 500,
    },
    {
        userName: 'kekezinho',
        image: 'https://avatars.githubusercontent.com/u/43152383?s=460&v=4',
        challengesCompleted: 34,
        currentExperience: 320,
    }
    ];

    return {
        props: {
            username,
            players
        }
    }
};