"use client";
import { FC } from "react";
import styles from "./NewsItem.module.scss";

type NewsItemProps = {
    imgSrc: string;
    title: string;
    description: string;
    href: string;
};

export const NewsItem: FC<NewsItemProps> = ({
    imgSrc,
    title,
    description,
}: NewsItemProps) => {
    return (
        <div
            className={`${styles.wrapper}`}
            onClick={() => {
                window.open("/news", "_self");
            }}
        >
            <img src={imgSrc} alt="News item" className={styles.photo} />
            <div className={styles.content}>
                <span>{description}</span>
                <h3>{title}</h3>
            </div>
        </div>
    );
};
