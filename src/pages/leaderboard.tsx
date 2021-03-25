import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { ChallengesProvider } from '../contexts/ChallengesContext';


import styles from '../styles/pages/Leaderboard.module.css';
import { SideBar } from '../components/SideBar';
import React from 'react';
import Ranking from '../components/Ranking';

interface LeaderProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Leaderboard({
    level,
    currentExperience,
    challengesCompleted }: LeaderProps) {
    return (
        <ChallengesProvider
            level={level}
            currentExperience={currentExperience}
            challengesCompleted={challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Leaderboard | move.it</title>
                </Head>
                <div className={styles.page}>
                    <nav className={styles.sideNav}>
                        <SideBar />
                    </nav>
                    <div className={styles.pageContent}>
                        <header className={styles.header}>
                            <h1>Leaderboard</h1>

                        </header>

                        <main>
                            <Ranking />
                        </main>
                    </div>
                </div>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level ?? 1),
            currentExperience: Number(currentExperience ?? 0),
            challengesCompleted: Number(challengesCompleted ?? 0)
        }
    }
};


/*
  antes chamada getInitialProps, a função getServerSideProps vem como
  principal funcionalidade do NextJs para resolver problemas de SEO
*/