import styles from "../skills/skill.module.css"
import 'boxicons';

const Skill = () => {
    return (
        <div className={styles.text}>
            <h1>Skills</h1>
            <div className={styles.grid_skill}>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' name='skip-next-circle' type='solid' /> NEXT.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' type='logo' name='react' /> REACT.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' type='logo' name='visual-studio' /> C#</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' type='logo' name='vuejs' /> VUE.JS</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' type='logo' name='javascript' /> JAVASCRIPT</div>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.skillMargin}>
                    <div className={styles.textAnimation}><box-icon color='white' name='git-pull-request' /> AZURE DEVOPS</div>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;