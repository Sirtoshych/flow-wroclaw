import styles from "./page.module.scss";

export default function Training() {
    return (
        <div className={styles.content} id="trainings">
            <img
                src={"/training.jpg"}
                alt="Logo 2"
                className={styles.training}
            />
            <h1 className={styles.trainings}>Trainings</h1>
            <div className={styles.location}>
                <div className={styles["location-item"]}>
                    <div className={styles["location-title"]}>
                        <h1>April - October</h1>
                        <div className={styles["location-item-description"]}>
                            <h3>
                                <a href="https://maps.app.goo.gl/MfypQKG9EWcMtmHZ8">
                                    Pola Marsowe, al Ignacego Jana Paderewskiego
                                    35
                                </a>
                            </h3>
                            <h4>Monday, Wednesday, 19:00 - 21:00</h4>
                            <img
                                src={"/marsowe.png"}
                                alt="Pola Marsowe"
                                className={styles["location-image"]}
                            />
                            <div
                                className={
                                    styles["location-item-location-text"]
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={styles["location-item"]}>
                    <div className={styles["location-title"]}>
                        <h1>November - March</h1>
                        <div className={styles["location-item-description"]}>
                            <h3>
                                <a href="https://maps.app.goo.gl/Rcvfutqn4Hu7TTya6">
                                    Stadion Sportowy Oławka, Na Niskich Łąkach
                                    8,
                                </a>
                            </h3>
                            <h4>Monday, Wednesday, 19:00 - 21:00</h4>
                            <img
                                src={"/olwaka.png"}
                                alt="Pola Marsowe"
                                className={styles["location-image"]}
                            />
                            <div
                                className={
                                    styles["location-item-location-text"]
                                }
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
