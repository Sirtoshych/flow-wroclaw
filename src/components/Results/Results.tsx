import styles from "./Results.module.scss";
import RESULTS from "./Results.json";

const Match = ({
    home,
    visitor,
    date,
    short,
    stage,
}: {
    home: { label: string; img?: string; points: number };
    visitor: { label: string; img?: string; points: number };
    short: string;
    date: string;
    stage: string;
}) => (
    <div className={styles.match}>
        <div className={styles["match-tournament"]}>
            <span>{short}</span>
            <span>{stage}</span>
        </div>
        <span className={styles["match-label"]}>{home.label}</span>
        {!home.img ? (
            <div></div>
        ) : (
            <img
                src={`./teams/${home.img}`}
                alt="home"
                className={styles.img}
            />
        )}
        <div className={styles["match-data"]}>
            <span className={styles["match-result"]}>
                {home.points} : {visitor.points}
            </span>
            <span className={styles["match-date"]}>{date}</span>
        </div>
        {!visitor.img ? (
            <div></div>
        ) : (
            <img
                src={`./teams/${visitor.img}`}
                alt="visitor"
                className={styles.img}
            />
        )}
        <span className={styles["match-label"]}>{visitor.label}</span>
    </div>
);

export const Results = () => {
    return (
        <div className={styles.container} id="results">
            <h1 className={styles["results-title"]}>Results</h1>

            <div className={styles.matches}>
                {RESULTS.data.map((el) =>
                    el.matches.map((match) => (
                        <Match key={match.id} short={el.short} {...match} />
                    )),
                )}
            </div>
        </div>
    );
};
