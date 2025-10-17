import { ExtendedNews } from "@/components/News/ExtendedNews";
import styles from "./page.module.scss";

import NEWS from "./news.json";
export default function News() {
    return (
        <div className={styles.content} id="news">
            <div className={styles.items}>
                {NEWS.news.map((el) => (
                    <ExtendedNews {...el} />
                ))}
            </div>
        </div>
    );
}
