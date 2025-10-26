import styles from "./InfoBlock.module.scss";

export const InfoBlock = ({ label }: { label: string }) => {
    return <div className={styles.container}>{label}</div>;
};
