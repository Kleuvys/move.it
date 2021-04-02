import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client'
import styles from '../styles/components/SideBar.module.css';


export function SideBar() {

    const router = useRouter();

    function handlerSignOutButton() {
        signOut({ callbackUrl: 'http://localhost:3000/login' });
    }

    return (
        <section className={styles.container}>
            <header>
                <img src="/icons/logo.svg" alt="Logo do Move It" />
            </header>

            <ul className={styles.navIcons}>
                <li className={router.pathname == "/" ? styles.active : ""}>
                    <Link href="/">
                        <a>
                            {router.pathname == "/" ? <img src="/icons/home-active.svg" alt="Início" /> : <img src="/icons/home.svg" alt="Início" />}
                        </a>
                    </Link>
                </li>
                <li className={router.pathname == "/leaderboard" ? styles.active : ""}>
                    <Link href="/leaderboard">
                        <a>
                            {router.pathname == "/leaderboard" ? <img src="/icons/award-active.svg" alt="Ranking" /> : <img src="/icons/award.svg" alt="Ranking" />}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <button onClick={handlerSignOutButton} className={styles.logout}><img src="./icons/log-out.svg" alt="Sair da conta" /> Sair </button>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
