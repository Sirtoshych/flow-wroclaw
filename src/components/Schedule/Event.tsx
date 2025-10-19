import { ReactNode } from "react";
import styles from "./Event.module.scss";

export const Event = ({
    date,
    name,
    location,
    time,
}: {
    date: string;
    type: string;
    name: string;
    location: ReactNode;
    time: string;
}) => {
    return (
        <div className={styles.event}>
            <div className={styles["event-date"]}>
                {date} {"\n"} {time}
            </div>
            <img
                src="/training_icon.png"
                alt="training"
                style={{ width: "64px", height: "64px" }}
            />
            <div className={styles["event-info"]}>
                <span className={styles["event-info-title"]}>{name}</span>
                <span className={styles["event-info-time"]}>{location}</span>
            </div>
        </div>
    );
};
