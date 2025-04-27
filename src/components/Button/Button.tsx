import styles from "./Button.module.scss";

export const Button = ({ label }: { label: string }) => {
    return <button className={styles.button}>{label}</button>;
};
