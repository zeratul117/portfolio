import styles from "../information/information.module.css"
import { FiFacebook, FiLinkedin  } from "react-icons/fi";

const Information = () => {
    const style = { color: "white", fontSize: "1.5em" }
    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonDiv}> 
            <a href="/Luis_Belis_Resume.pdf" download="Luis Belis CV" style={{ textDecoration: 'none', color: 'white'}}><button className={styles.buttonStyle}>Download CV</button></a>
            </div>
            <div className={styles.socials}>
                <a href={'https://www.linkedin.com/in/luis-belis-755426186/'} target="_blank"><span className={styles.logos}><FiFacebook style={style}/></span></a>
                <a href={'https://www.facebook.com/luisalfredo.belisdilone/'} target="_blank"><span className={styles.logos}><FiLinkedin  style={style}/></span></a>
            </div>
        </div>
    );
};

export default Information;