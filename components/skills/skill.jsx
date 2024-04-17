"use client"

import styles from "../skills/skill.module.css"
import { DiReact, DiVisualstudio, DiJavascript1, DiJsBadge, DiGitBranch } from "react-icons/di";

const Skill = () => {
    const style = { color: "white", fontSize: "1.5em" }
    return (
        <div className={styles.text}>
            <h1>Skills</h1>
            <div className={styles.grid_skill}>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiReact style={style}/> NEXT.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiReact style={style}/> REACT.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiVisualstudio  style={style} /> C#</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiJavascript1 style={style}/> VUE.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiJsBadge style={style} /> JAVASCRIPT</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><DiGitBranch  style={style}/> AZURE DEVOPS</div>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;