import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChallengesContext';

type CountdowContextData = {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    time: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

type CountdowContextProviderProps = {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdowContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdowContextProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(5);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
            time
        }}>
            { children}
        </CountdownContext.Provider>
    )
}