import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';

type LoginProps = {
    isLogged: boolean;
    session: {
        user: {
            name: string,
            email: string,
            image: string
        },
        expires: string
    };
}

export default function login(props: LoginProps) {
    const [username, setUsername] = useState('');
    let [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        //if already authenticated redirect to '/'
        if (props.isLogged) {
            router.replace('/');
        }

    }, []);

    function handleSignInButton() {
        setIsLoading(true);
        Cookies.set('username', username);
        //{ callbackUrl: 'http://localhost:3000/' }
        try {
            signIn('github', { callbackUrl: 'http://localhost:3000/' });
        } catch (err) {
            console.log(err);
        }

    }


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

                    <form>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu username" />
                        <button onClick={handleSignInButton}>
                            {isLoading ? (<i style={{ color: '#fff' }} className="fas fa-spinner fa-pulse fa-2x"></i>)
                                : (<img src="./icons/login-arrow.svg" alt="Entrar" />)}
                        </button>
                    </form>

                </div>
            </div>
        </main>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    let isLogged = false;
    const session = await getSession({ req });
    if (session) {
        isLogged = true;
        //console.log(session);
    }
    return {
        props: {
            session,
            isLogged
        }
    }
}