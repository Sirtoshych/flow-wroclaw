import NexLink from "next/link";
import styles from "./Link.module.scss";

export const Link = ({ href, label }: { href: string; label: string }) => {
    return (
        <NexLink href={href} className={styles.link}>
            {label}
        </NexLink>
    );
};
