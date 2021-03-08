import React, { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from "../components/LevelUpModal";

type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

type ChallengeContextData = {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
    experienceToNextLevel: number;
    closeLevelUpModal: () => void;
}

type ChallengesProviderProps = {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    let registration: ServiceWorkerRegistration;

    function registerNotification() {
        navigator.serviceWorker.register("/sw.js").then(
            function (regist) {
                registration = regist;
                console.log("Service Worker registration successful with scope: ", regist.scope);
            },
            function (err) {
                console.log("Service Worker registration failed: ", err);
            }
        );
    }
    /* 
        fazer botão Sino para ativar as notificações chamando
        register notification
    */

    useEffect(() => {
        if ("serviceWorker" in navigator) {
            Notification.requestPermission().then(response => {
                if (response === 'granted') {
                    registerNotification();
                }
            });
        }
    }, []);

    // setup cookies
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        if (isLevelUpModalOpen) {
            setIsLevelUpModalOpen(false);
        }
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        console.log('active Challenge amount: ' + challenge.amount);
        setActiveChallenge(challenge);

        if (registration) {
            new Audio('./notification.mp3').play();

            registration.showNotification("Novo desafio 🚀", {
                body: `Valendo ${challenge.amount} xp`
            });
        }


    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        };

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge,
                closeLevelUpModal
            }}>
            {children}

            {/* LevelUp modal é disparado pela função levelUp
            no contexto de Challenge, então podemos coloca-lo aqui
            ou em qualquer outro local onde seja possível acessar 
            este contexto */}

            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}