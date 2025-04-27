import styles from "./News.module.scss";

export const News = () => (
    <div className={styles.news}>
        <div className={styles["news-wrapper"]}>
            <span className={styles["news-title"]}>News</span>
            <div className={styles["news-list"]}>
                <div className={styles["news-item"]}>
                    <div className={styles["news-item-title"]}>
                        <h3>News Title</h3>
                    </div>
                </div>
                <div className={styles["news-item"]}>
                    <div className={styles["news-item-title"]}>
                        <h3>News Title</h3>
                    </div>
                </div>
                <div className={styles["news-item"]}>
                    <div className={styles["news-item-title"]}>
                        <h3>News Title</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
