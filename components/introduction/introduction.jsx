"use client"

import Image from "next/image";
import styles from "../introduction/introduction.module.css"
import ReactTyped from "react-typed";
import { useState, useEffect } from 'react';

const Intruduction = () => {
    const [width, setWidth] = useState((typeof window !== 'undefined' && (window.innerWidth)));
    const [mounted, setMounted] = useState(false);
    const breakpoint = 1000;

      const descriptionList = [
          "Full stack developer", 
          "Web developer", 
          "Self-taught React.js developer",
          "Video game lover",
          "Dancer"
     ]

     useEffect(() => {
        setMounted(true);
    
        const handleResizeWindow = () => {
          setWidth(window.innerWidth)
        } 
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    if (mounted) {
        if (width < breakpoint) {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.textCarousel}>
                            <h1 >Hello there,</h1>
                            <h1 >I'm <span className={styles.spanText}>Luis Belis</span></h1>
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
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.textCarousel}>
                    <h1 >Hello there,</h1>
                    <h1 >I'm <span className={styles.spanText}>Luis Belis</span></h1>
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