"use client"

import styles from "../skills/skill.module.css"
import 'boxicons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'

const Skill = () => {
    const [width, setWidth] = useState((typeof window !== 'undefined' && (window.innerWidth)));
    const [mounted, setMounted] = useState(false);
    const breakpoint = 1000;
    const router = useRouter()
    
      useEffect(() => {
        setMounted(true);
    
        const handleResizeWindow = () => {
          setWidth(window.innerWidth)
          if (window.innerWidth > 1000) {
            router.push('/')
          }
        } 
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

       if (mounted) {
        if (width > breakpoint) {
          return (
            <div>
              <ErrorPage statusCode={404} />
            </div>
          );
         }
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
                    <div className={styles.mobileSpace}></div>
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
       }
       return (
        <div></div>
       );
};

export default Skill;