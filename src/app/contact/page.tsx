import styles from "./page.module.scss";

export default function Contact() {
    return (
        <div className={styles.container} id="contacts">
            <div className={styles.contact}>
                <h1>Contacts </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.links}>
                    <div className={styles.email}>
                        <a href="mailto:flow.ultimate.wroclaw@gmail.com">
                            flow.ultimate.wroclaw@gmail.com
                        </a>
                    </div>
                    <span className={styles.email}>
                        <img
                            src="/facebook.png"
                            alt="Facebook"
                            className={styles.image}
                        />
                        <a href=" https://www.facebook.com/flow.ultimate.wroclaw">
                            Facebook
                        </a>
                    </span>
                    <span className={styles.email}>
                        <img
                            src="/instagram.png"
                            alt="Imstagram"
                            className={styles.image}
                        />
                        <a href="https://www.instagram.com/flow.ultimate.wroclaw/">
                            Instagram
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
