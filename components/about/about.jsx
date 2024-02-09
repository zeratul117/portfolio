import Image from "next/image";
import styles from "../about/about.module.css"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div>
                <div className={styles.aboutImage}>
                    <Image src="/aboutImage.png" 
                        className={styles.image}
                        alt=""
                        width={300} height={400}/>
                </div>
                <div className={styles.divText}>
                    <p className={styles.text}><span className={styles.spanText}>Howdy!</span>I'm a dedicated and hardworking developer originally from the Dominican Republic. I've aquired multiple software developing skills that have allowed me to move my career forward and become a permanent resident of Canada by working as a software developer for a big company here in Sudbury called ClaimSecure. I love learning new technologies and ways to code things. I don't stop pushing until I get what I need in life.</p>
                </div>
            </div>
        </div>
    );
};

export default About;