import styles from "./page.module.scss";

export default function Contact() {
    return (
        <div className={styles.content}>
            <img
                src={"/team_standing.jpg"}
                alt="Team standing"
                className={styles.training}
            />
            <div className={styles.contact}>
                <h1>Contact us via:</h1>
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
    );
}
