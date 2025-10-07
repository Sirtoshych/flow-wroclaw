import { FC } from "react";
import styles from "./NewsItem.module.scss";

type NewsItemProps = {
    imgSrc: string;
    title: string;
    description: string;
    href: string;
    type: "main" | "side";
};

export const NewsItem: FC<NewsItemProps> = ({
    imgSrc,
    title,
    description,
    type = "main",
}: NewsItemProps) => {
    return (
        <div className={`${styles.wrapper} ${styles[type]}`}>
            <img src={imgSrc} alt="News item" className={styles.photo} />
            <div className={styles.content}>
                <span>{description}</span>
                <h3>{title}</h3>
            </div>
        </div>
    );
};
