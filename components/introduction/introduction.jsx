import Image from "next/image";
import styles from "../introduction/introduction.module.css"
import ReactTyped from "react-typed";

const Intruduction = () => {

      const descriptionList = [
          "Full stack developer", 
          "Web developer", 
          "Self-taught React.js developer",
          "Video game lover",
          "Dancer"
     ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.textCarousel}>
                    <h1 className={styles.testing}>Hello there,</h1>
                    <h1 className={styles.testing}>I'm <span className={styles.spanText}>Luis Belis</span></h1>
                    <h1 className={styles.testing}><ReactTyped
                        strings={descriptionList}
                        typeSpeed={70}
                        loop
                        backDelay={2000}
                        backSpeed={20}
                        cursorChar="|"
                        showCursor={true}
                    /></h1>
                </div>
                <div className={styles.imageDiv}>
                <Image src="/portfolio_picture.png" 
                    className={styles.image}
                    alt=""
                    fill/> 
                </div>
        </div>

    );
};

export default Intruduction;