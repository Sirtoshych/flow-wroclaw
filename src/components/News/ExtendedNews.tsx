import styles from "./ExtendedNews.module.scss";

type ExtendedNewsItemProps = {
    title: string;
    imgSrc: string;
    content: string;
    date: string;
};

export const ExtendedNews = ({
    title,
    imgSrc,
    content,
    date,
}: ExtendedNewsItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles["item-photo-container"]}>
                <div className={styles["item-title"]}>{title}</div>
                <img src={imgSrc} className={styles["item-photo"]}></img>
            </div>
            <div className={styles["item-content"]}>{content}</div>
            <div className={styles["item-footer"]}>{date}</div>
        </div>
    );
};
