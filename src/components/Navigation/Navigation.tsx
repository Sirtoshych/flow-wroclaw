import { Link } from "../Link/Link";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <div className={styles.container}>
            <Link href={"/"} label={"Home"} />
            <Link href={"/training"} label={"Trainings"} />
            <Link href={"/news"} label={"News"} />
            {/* <Link href={"/cooperation"} label={"Cooperation"} /> */}
            <Link href={"/sponsors"} label={"Sponsors"} />
            <Link href={"/#contacts"} label={"Contact"} />
        </div>
    );
};
