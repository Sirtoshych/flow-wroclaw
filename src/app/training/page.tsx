import styles from "./page.module.scss";

export default function Training() {
    return (
        <div className={styles.content} id="trainings">
            {/* <img
                src={"/training.jpg"}
                alt="Logo 2"
                className={styles.training}
            /> */}
            {/* <h1 className={styles.trainings}>Trainings</h1> */}
            <div className={styles.location}>
                <div className={styles.info}>
                    <div className={styles.photos}>
                        <img
                            src={"/training/1.jpg"}
                            alt="training1"
                            className={styles.photo}
                        />
                        <img
                            src={"/training/2.jpg"}
                            alt="training2"
                            className={styles.photo}
                        />
                        <img
                            src={"/training/3.jpg"}
                            alt="training3"
                            className={styles.photo}
                        />
                        <img
                            src={"/training/4.jpg"}
                            alt="training3"
                            className={styles.photo}
                        />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.description}>
                            <h1 className={styles.title}>What to Expect</h1>
                            <ul>
                                <li>
                                    <b>Warm-Up & Stretching:</b> We always start
                                    with a dynamic warm-up to get you moving and
                                    prevent injuries.
                                </li>
                                <li>
                                    <b>Skill Drills:</b> You’ll learn and
                                    practice the basics — throwing, catching,
                                    cutting, and marking. Don’t worry if you’ve
                                    never thrown a disc before — we’ll teach you
                                    everything step by step.
                                </li>
                                <li>
                                    <b>Game Play:</b> Every session includes
                                    some scrimmage time so you can put what
                                    you’ve learned into action. Coaches and
                                    experienced players will guide you during
                                    play and help you learn the flow of the
                                    game.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.description}>
                            <div className={styles.title}>What to Bring</div>
                            <ul>
                                <li>
                                    <b>Comfortable Sports Clothes:</b> Dress for
                                    running and quick movement.
                                </li>
                                <li>
                                    <b>Cleats or Running Shoes:</b> Cleats
                                    (football or soccer type) are best for grip
                                    on grass or turf, but regular running shoes
                                    work fine for beginners
                                </li>
                                <li>
                                    <b>A Water Bottle</b> Stay hydrated — you’ll
                                    be running a lot!
                                </li>
                                <li>
                                    <b>A Positive Attitude:</b> Energy,
                                    teamwork, and good spirit are what make
                                    Ultimate awesome.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.locations}>
                        <div className={styles["location-item"]}>
                            <div className={styles["location-title"]}>
                                <h1>April - October</h1>
                                <div
                                    className={
                                        styles["location-item-description"]
                                    }
                                >
                                    <h3>
                                        <a href="https://maps.app.goo.gl/MfypQKG9EWcMtmHZ8">
                                            Pola Marsowe, al Ignacego Jana
                                            Paderewskiego 35
                                        </a>
                                    </h3>
                                    <h3>Monday, Wednesday, 19:00 - 21:00</h3>
                                    <img
                                        src={"/marsowe.png"}
                                        alt="Pola Marsowe"
                                        className={styles["location-image"]}
                                    />
                                    <div
                                        className={
                                            styles[
                                                "location-item-location-text"
                                            ]
                                        }
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["location-item"]}>
                            <div className={styles["location-title"]}>
                                <h1>November - March</h1>
                                <div
                                    className={
                                        styles["location-item-description"]
                                    }
                                >
                                    <h3>
                                        <a href="https://maps.app.goo.gl/Rcvfutqn4Hu7TTya6">
                                            Stadion Sportowy Oławka, Na Niskich
                                            Łąkach 8,
                                        </a>
                                    </h3>
                                    <h3>Monday, Wednesday, 19:00 - 21:00</h3>
                                    <img
                                        src={"/olwaka.png"}
                                        alt="Pola Marsowe"
                                        className={styles["location-image"]}
                                    />
                                    <div
                                        className={
                                            styles[
                                                "location-item-location-text"
                                            ]
                                        }
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
