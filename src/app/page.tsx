import * as React from "react";

import styles from "./page.module.css";

import { InfoBlock } from "@/components/InfoBlock/InfoBlock";
import { News } from "@/components/News/News";
import { Schedule } from "@/components/Schedule/Schedule";
// import { Video } from "@/components/Video/Video";
import Sponsors from "./sponsors/page";
import Training from "./training/page";
import Contact from "./contact/page";

export default function Home() {
    return (
        <main className={styles.main}>
            <img src={"/bg.jpg"} alt="Background 1" className={styles.team} />
            <img src={"/grass.png"} alt="BG 2" />
            <div className={styles.view}>
                <div className={styles.content}>
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
                <Training />
                {/* <Video /> */}
                <Sponsors />
                <Contact />
            </div>
        </main>
    );
}
