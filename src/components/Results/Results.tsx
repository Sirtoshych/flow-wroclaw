import styles from "./Results.module.scss";
import RESULTS from "./Results.json";

const Match = ({
    home,
    visitor,
    date,
}: {
    home: { label: string; img: string; points: number };
    visitor: { label: string; img: string; points: number };

    date: string;
}) => (
    <div className={styles.match}>
        <span className={styles["match-label"]}>{home.label}</span>
        <img src={`./teams/${home.img}`} alt="home" className={styles.img} />
        <div className={styles["match-data"]}>
            <span className={styles["match-result"]}>
                {home.points} : {visitor.points}
            </span>
            <span className={styles["match-date"]}>{date}</span>
        </div>
        <img
            src={`./teams/${visitor.img}`}
            alt="visitor"
            className={styles.img}
        />
        <span className={styles["match-label"]}>{visitor.label}</span>
    </div>
);

export const Results = () => {
    return (
        <div className={styles.container} id="results">
            <h1 className={styles["results-title"]}>Results</h1>

            {RESULTS.data.map((el) => (
                <div className={styles.results}>
                    <div className={styles["results-event"]}>{el.event}</div>
                    <div className={styles.matches}>
                        {el.matches.map((match) => (
                            <Match key={match.id} {...match} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
