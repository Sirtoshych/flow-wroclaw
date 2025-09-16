import styles from "./News.module.scss";

export const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles["news-wrapper"]}>
                <span className={styles["news-title"]}>News</span>
                <div className={styles["news-list"]}>
                    <div className={styles["news-item"]}>
                        <iframe
                            id="1"
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fflow.ultimate.wroclaw%2Fposts%2Fpfbid036vDrSBpF1Lw3r5uk9a7xcofKyyJrtqHeYeJG6QdCuUxWw3Qkzhroi396tkf1HDKzl&show_text=true"
                            height={"100%"}
                            className={styles.iframe}
                            style={{ border: "none" }}
                            width={"100%"}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>

                    <div className={styles["news-item"]}>
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fflow.ultimate.wroclaw%2Fposts%2Fpfbid0gcebUozPpBPHg3F7M9sWu9uTj3qLw8HtP4r7X4tzooUN9hQNPH1ZY61nqpUZ8p9wl&show_text=true"
                            className={styles.iframe}
                            scrolling="auto"
                            style={{ border: "none" }}
                            width={"100%"}
                            height={"100%"}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    <div className={styles["news-item"]}>
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fflow.ultimate.wroclaw%2Fposts%2Fpfbid02CFQ24Q1UVXJKDXYnZYcDXGZrBGXPiKCpxBtxdwhZ1oFyTbfh7qFLG3vdmFYBPQiHl&show_text=true"
                            className={styles.iframe}
                            style={{ border: "none" }}
                            scrolling="auto"
                            width={"100%"}
                            height={"100%"}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
