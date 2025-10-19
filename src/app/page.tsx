import * as React from "react";

import styles from "./page.module.css";

import { InfoBlock } from "@/components/InfoBlock/InfoBlock";
import { News } from "@/components/News/News";
import { Schedule } from "@/components/Schedule/Schedule";
import { Video } from "@/components/Video/Video";
import Contact from "./contact/page";
import { Results } from "@/components/Results/Results";

// import grass from "../../public/grass.png";
// import team from "../../public/bg.jpg";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.view}>
                <div className={styles.content}>
                    <div className={styles.name}>FLOW WROCLAW</div>
                    <div className={styles.description}>
                        Ultimate Frisbee Team
                    </div>
                    <div className={styles.achievements}>
                        <InfoBlock
                            label={
                                "Poland Mixed National Champions (2021, 2019, 2018)"
                            }
                        />
                        <InfoBlock
                            label={
                                "Poland Beach National Champions (2021, 2015)"
                            }
                        />
                        <InfoBlock label={"4th team in Europe (2021)"} />
                    </div>
                </div>
                <News />
                <Results />
                <Schedule />
                <Video />
                <Contact />
            </div>
        </main>
    );
}
