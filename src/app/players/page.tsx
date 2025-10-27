import { Player } from "@/components/Players/Player";
import styles from "./page.module.scss";
import PLAYERS from "./players.json";
export default function Players() {
    return (
        <div className={styles.content} id="players">
            <div className={styles.container}>
                <h1>Roster</h1>
                <div className={styles.captains}>
                    <div className={styles.captain}>
                        <h2>Captain</h2>
                        <div className={styles.players}>
                            <Player
                                name="Pawel"
                                lastname="Milanowicz"
                                number={32}
                                imgsrc={"Milanowicz1.jpg"}
                                appearences={177}
                                assists={466}
                                points={285}
                            />
                        </div>
                    </div>
                    <div className={styles.captain}>
                        <h2>Spirit Captain</h2>
                        <div className={styles.players}>
                            <Player
                                name="Sergii"
                                lastname="Anufriiev"
                                number={14}
                                imgsrc={"Anufriev.jpg"}
                                appearences={182}
                                assists={137}
                                points={160}
                            />
                        </div>
                    </div>
                </div>

                <h2>Players</h2>
                <div className={styles.players}>
                    {PLAYERS.sort((a, b) => (a.number > b.number ? 1 : -1)).map(
                        (el) => (
                            <Player
                                key={`${el.last_name} ${el.name}`}
                                lastname={el.last_name}
                                {...el}
                            />
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
