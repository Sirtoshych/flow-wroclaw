import styles from "./Video.module.scss";

export const Video = () => {
    return (
        <div className={styles.video}>
            <iframe
                src="https://www.youtube.com/embed/YkMMqOUNyKk?si=HSb4y5fxcA3lp1wG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};
