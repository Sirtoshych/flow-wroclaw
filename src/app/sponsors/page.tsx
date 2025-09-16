import styles from "./page.module.scss";

export default function Sponsors() {
    return (
        <div className={styles.content}>
            <img
                src={"/sponsors.jpg"}
                alt="Sponsors"
                className={styles.image}
            />
            <div className={styles.sponsors}>
                <p className={styles.text}>
                    Join us as a sponsor and be part of our journey! Your
                    support will directly fuel our growth, competition, and
                    community impact.
                </p>
                <p className={styles.text}>
                    If you wish to become our sponsor, please contact us via{" "}
                    <a href="mailto:flow.ultimate.wroclaw@gmail.com">email</a>
                </p>
            </div>
        </div>
    );
}
