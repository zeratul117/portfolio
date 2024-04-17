"use client"

import styles from "../skill/skill.module.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'
import { DiReact, DiVisualstudio, DiJavascript1, DiJsBadge, DiGitBranch } from "react-icons/di";

const Skill = () => {
    const [width, setWidth] = useState((typeof window !== 'undefined' && (window.innerWidth)));
    const [mounted, setMounted] = useState(false);
    const breakpoint = 1000;
    const router = useRouter()
    const style = { color: "white", fontSize: "1.5em" }

      useEffect(() => {
        setMounted(true);
    
        const handleResizeWindow = () => {
          if(typeof window !== 'undefined')
            {
              setWidth(window.innerWidth)
              if (window.innerWidth > 1000) {
                router.push('/')
              }
            }
        } 
        if(typeof window !== 'undefined') {
          window.addEventListener("resize", handleResizeWindow);
        }
         return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener("resize", handleResizeWindow);
          }
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
                        <div className={styles.textAnimation}><DiReact style={style}/> NEXT.JS</div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.skillMargin}>
                        <div className={styles.textAnimation}><DiReact style={style}/> REACT.JS</div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.skillMargin}>
                        <div className={styles.textAnimation}><DiVisualstudio style={style}/> C#</div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.mobileSpace}></div>
                    <div className={styles.skillMargin}>
                        <div className={styles.textAnimation}><DiJavascript1 style={style}/> VUE.JS</div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.skillMargin}>
                        <div className={styles.textAnimation}><DiJsBadge style={style}/> JAVASCRIPT</div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.skillMargin}>
                        <div className={styles.textAnimation}><DiGitBranch style={style}/> AZURE DEVOPS</div>
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