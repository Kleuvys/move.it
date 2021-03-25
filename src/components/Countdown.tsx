import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { hasFinished,
        isActive,
        minutes,
        seconds,
        startCountdown,
        resetCountdown } = useContext(CountdownContext);

    /* 
    Essa lógica de exibição do tempo não foi movida para o context de 
    countdown pq se trata apenas de uma formatação do layout do componente
    Countdown, portanto não faz parte da regra de negócio
    */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    let progress = 100 - Math.round((((minutes * 60 + seconds) / 5) * 100));

    console.log("progress " + progress + "%");

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? (
                    <button disabled className={`${styles.countdownButton}`} >
                        Ciclo encerrado <img src="./icons/check-circle.svg" />
                    </button>
                ) : (
                    <>
                        {
                            !isActive ? (
                                <button onClick={startCountdown} type="button" className={`${styles.countdownButton}`} >
                                    Iniciar um ciclo <img src="./icons/arrow-right.svg" />
                                </button>
                            ) : (
                                <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                    <p>Abandonar ciclo <img src="./icons/close-black.svg" alt="Abandonar Ciclo" /></p>
                                    <div className={`${styles.countProgressBar}`}>
                                        <span style={{ width: `${progress}%` }}></span>
                                    </div>
                                </button>
                            )
                        }
                    </>
                )
            }


        </div >
    )
}
