import styles from "./Video.module.scss";

export const Video = () => {
    return (
        <div className={styles.video}>
            <iframe
                src="https://www.youtube.com/watch?v=YkMMqOUNyKk"
                allowFullScreen
            />
        </div>
    );
};
