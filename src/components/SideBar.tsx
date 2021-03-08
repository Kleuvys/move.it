import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/SideBar.module.css';


export function SideBar() {

    const router = useRouter();

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
            </ul>
        </section>
    )
}
