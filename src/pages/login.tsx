import React from 'react';

import styles from '../styles/pages/Login.module.css';

export default function login() {

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imgBack}>
                    <img src="./simbolo.png" />
                </div>
                <div className={styles.column}>
                    <img src="./login-logo.png" className={styles.loginLogo} alt="logo move.it" />
                    <h1>Bem-vindo</h1>
                    <p>
                        <img src="./icons/github-icon.svg" alt="Login com github" />
                        <span> Faça login com seu Github para começar </span>
                    </p>
                    <form action="">
                        <input type="text" placeholder="Digite seu username" />
                        <button><img src="./icons/login-arrow.svg" alt="Entrar" /></button>
                    </form>
                </div>
            </div>
        </main>
    )
}
