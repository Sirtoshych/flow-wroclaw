import styles from "./page.module.scss";

export default function Contact() {
    return (
        <div className={styles.container} id="#contact">
            <img
                src={"/team_standing.jpg"}
                alt="Team standing"
                className={styles.photo}
            />
            <div className={styles.contact}>
                <h1>Contacts </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.links}>
                    <span className={styles.email}>
                        Facebook:{" "}
                        <a href=" https://www.facebook.com/flow.ultimate.wroclaw">
                            Flow Wroclaw Facebook
                        </a>
                    </span>
                    <span className={styles.email}>
                        Instagram:{" "}
                        <a href="https://www.instagram.com/flow.ultimate.wroclaw/">
                            Flow Wroclaw Instagram
                        </a>
                    </span>
                    <span className={styles.email}>
                        Email:{" "}
                        <a href="mailto:flow.ultimate.wroclaw@gmail.com">
                            flow.ultimate.wroclaw@gmail.com
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
