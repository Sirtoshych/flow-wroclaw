import styles from "./Player.module.scss";

type PlayerProps = {
    name: string;
    lastname: string;
    number: number;
    appearences: number;
    assists: number;
    goals: number;
    imgsrc?: string;
};
export const Player = ({
    name,
    lastname,
    number,
    imgsrc,
    assists,
    goals,
    appearences,
}: PlayerProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div
                    className={styles.front}
                    style={{ backgroundImage: `url('/players/${imgsrc}')` }}
                >
                    <div className={styles.info}>
                        <div className={styles.number}>#{number}</div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.lastname}>{lastname}</div>
                    </div>
                </div>
                <div className={styles.back}>
                    <div className={styles.number}>#{number}</div>
                    <div className={styles.name}>
                        {name} {lastname}
                    </div>
                    <div className={styles.appearences}>
                        Appearences: {appearences}
                    </div>
                    <div className={styles.assists}>Assists: {assists}</div>
                    <div className={styles.goals}>Goals: {goals}</div>
                </div>
            </div>
        </div>
    );
};
