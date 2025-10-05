import styles from "./Schedule.module.scss";

import { Event } from "./Event";

export const Schedule = () => {
    function closestMondayOrWednesday(date = new Date()) {
        const day = date.getDay(); // Sunday=0, Monday=1, ..., Saturday=6

        const distanceToMonday = (1 - day + 7) % 7 || 7;
        const distanceToWednesday = (3 - day + 7) % 7 || 7;

        const daysToAdd =
            distanceToMonday <= distanceToWednesday
                ? distanceToMonday
                : distanceToWednesday;

        const closestDate = new Date(date);
        closestDate.setDate(date.getDate() + daysToAdd);

        return closestDate;
    }

    function getNextFourMondaysOrWednesdays(startDate = new Date()) {
        const results = [];
        let currentDate = new Date(startDate);

        for (let i = 0; i < 4; i++) {
            const nextDate = closestMondayOrWednesday(currentDate);

            // Format: "day, month"
            const formatted = `${nextDate.getDate()}, ${nextDate.toLocaleString("en-US", { month: "long" })}`;
            results.push(formatted);

            currentDate = new Date(nextDate);
            currentDate.setDate(nextDate.getDate() + 1);
        }

        return results;
    }

    return (
        <div className={styles.schedule}>
            <h1>Upcoming Events</h1>
            <div className={styles.events}>
                {getNextFourMondaysOrWednesdays().map((el) => (
                    <Event
                        key={el}
                        date={el}
                        type="Training"
                        name="Open Training"
                        location={
                            <a href="https://maps.app.goo.gl/MfypQKG9EWcMtmHZ8">
                                Pola Marsowe, al Ignacego Jana Paderewskiego 35
                            </a>
                        }
                        time="19:00 - 21:00"
                    />
                ))}
            </div>
        </div>
    );
};
