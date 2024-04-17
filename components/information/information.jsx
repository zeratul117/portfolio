import styles from "../information/information.module.css"

const Information = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonDiv}> 
            <a href="/Luis_Belis_Resume.pdf" download="Luis Belis CV" style={{ textDecoration: 'none', color: 'white'}}><button className={styles.buttonStyle}>Download CV</button></a>
            </div>
            <div className={styles.socials}>
                <a href={'https://www.linkedin.com/in/luis-belis-755426186/'} target="_blank"><span className={styles.logos}><box-icon color="white" size='md' type='logo' name='linkedin-square' /></span></a>
                <a href={'https://www.facebook.com/luisalfredo.belisdilone/'} target="_blank"><span className={styles.logos}><box-icon color="white" size='md' type='logo' name='facebook-square' /></span></a>
            </div>
        </div>
    );
};

export default Information;