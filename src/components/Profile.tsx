import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface UserProps {
    userName: string,
    email: string,
    image: string
}

interface ProfileProps {
    userData: UserProps;
}

export function Profile({ userData }: ProfileProps) {
    const { level } = useContext(ChallengesContext);
    const { userName, image } = userData;
    return (
        <div className={styles.profileContainer}>
            {/*<img src="https://avatars.githubusercontent.com/u/43152383?s=460&v=4" alt="Keke" />*/}
            <img src={image} alt="imagem de perfil" />
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
