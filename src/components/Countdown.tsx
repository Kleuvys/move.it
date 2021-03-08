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
                        Ciclo encerrado
                    </button>
                ) : (
                        <>
                            {
                                !isActive ? (
                                    <button onClick={startCountdown} type="button" className={`${styles.countdownButton}`} >
                                        Iniciar um ciclo
                                    </button>
                                ) : (
                                        <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonAtive}`}>
                                            Abandonar ciclo
                                        </button>
                                    )
                            }
                        </>
                    )
            }


        </div >
    )
}
