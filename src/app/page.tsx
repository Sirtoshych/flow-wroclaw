import * as React from "react";

import styles from "./page.module.css";
import { Navigation } from "@/components/Navigation/Navigation";

import { InfoBlock } from "@/components/InfoBlock/InfoBlock";
import { News } from "@/components/News/News";
import { Schedule } from "@/components/Schedule/Schedule";
import { Video } from "@/components/Video/Video";

export default function Home() {
    return (
        <main>
            <div className={styles.content}>
                <img
                    src={"/team_white.jpg"}
                    alt="Logo 2"
                    className={styles.team}
                />
                <div className={styles.name}>K.S. Flow Wrocław</div>
                <div className={styles.achievements}>
                    <InfoBlock
                        label={
                            "Poland Mixed National Champions  \n (2021, 2019, 2018)"
                        }
                    />
                    <InfoBlock
                        label={
                            "Poland Beach National Champions \n (2021, 2015)"
                        }
                    />
                    <InfoBlock label={"4th team in Europe \n (2021)"} />
                </div>
            </div>
            <News />
            <Schedule />
            <Video />
        </main>
    );
}
