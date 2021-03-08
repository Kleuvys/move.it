import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CountdownProvider } from '../contexts/CountdownContext';

import { ChallengeBox } from '../components/ChallengeBox';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { ChallengesProvider } from '../contexts/ChallengesContext';


import styles from '../styles/pages/Home.module.css';
import { SideBar } from '../components/SideBar';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Início | move.it</title>
                </Head>

                <div className={styles.page}>
                    <nav className={styles.sideNav}>
                        <SideBar />
                    </nav>

                    <div className={styles.pageContent}>
                        <header className={styles.header}>
                            <h1>Leaderboard</h1>
                            <ExperienceBar />
                        </header>

                        <CountdownProvider>
                            <main>
                                <section className={styles.mainSection}>
                                    <article className={styles.countdownArticle}>
                                        <Profile />
                                        <CompletedChallenges />
                                        <Countdown />
                                    </article>

                                    <article className={styles.challengeArticle}>
                                        <ChallengeBox />
                                    </article>
                                </section>
                            </main>
                        </CountdownProvider>
                    </div>

                </div>

            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    console.log('curExp from cookie: ' + Number(currentExperience));

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