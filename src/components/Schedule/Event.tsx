import styles from "./Event.module.scss";

export const Event = ({
    date,
    type,
    name,
    location,
    time,
}: {
    date: string;
    type: string;
    name: string;
    location: string;
    time: string;
}) => {
    return (
        <div className={styles.event}>
            <div className={styles["event-date"]}>
                <span className={styles["event-date-day"]}>
                    {date} {time}
                </span>
            </div>
            <div className={styles["event-info"]}>
                <span className={styles["event-info-time"]}>{location}</span>
                <span className={styles["event-info-title"]}>{name}</span>
            </div>
        </div>
    );
};
