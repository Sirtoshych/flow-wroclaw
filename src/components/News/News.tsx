import styles from "./News.module.scss";
import { NewsItem } from "./NewsItem";

export const News = () => {
    return (
        <div className={styles.news} id="news">
            <div className={styles["news-wrapper"]}>
                <h1 className={styles["news-title"]}>News</h1>
                <div className={styles["news-content"]}>
                    <NewsItem
                        imgSrc="/MPX_2025.jpg"
                        title="22.09.2025"
                        description="Season finished with 5th place at the Polish National Championship!"
                        href="https://www.instagram.com/p/DOwK4IhCPAU/"
                        type="main"
                    />
                    <NewsItem
                        imgSrc="/MPX_2025_roster.png"
                        title="11.09.2025"
                        description="Our team and first day schedule for Polish National Championship (Mixed)! Tournament on our home turf "
                        href="https://www.instagram.com/p/DOd1Q5rCHvn/?img_index=1"
                        type="side"
                    />
                    <NewsItem
                        imgSrc="/PMP_2025.jpg"
                        title="07.09.2025"
                        description="The beach ultimate season ends for us with medals at the Polish Championships in Dębki! ⛱️"
                        href="https://www.instagram.com/p/DOTpeUNiCrO/"
                        type="side"
                    />
                </div>
            </div>
        </div>
    );
};
