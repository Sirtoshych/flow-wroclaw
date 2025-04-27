import styles from "./Schedule.module.scss";

import { Event } from "./Event";
export const Schedule = () => {
    return (
        <div className={styles.schedule}>
            <h1>Schedule</h1>
            <div className={styles.events}>
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
                <Event
                    date="5 May"
                    type="Training"
                    name="Training"
                    location="Pola Marsowe"
                    time="10:00"
                />
            </div>
        </div>
    );
};
