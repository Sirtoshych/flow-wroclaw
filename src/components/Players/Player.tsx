import styles from "./Player.module.scss";

type PlayerProps = {
    name: string;
    lastname: string;
    number: number;
    imgsrc?: string;
};
export const Player = ({ name, lastname, number, imgsrc }: PlayerProps) => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url('/players/${imgsrc}')` }}
        >
            <div className={styles.info}>
                <div className={styles.number}>#{number}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.lastname}>{lastname}</div>
            </div>
        </div>
    );
};
