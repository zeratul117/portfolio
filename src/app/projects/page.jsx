"use client"
import Image from "next/image";
import styles from "../projects/project.module.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'

export default function Projects() {
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
      <div className={styles.container}>
        <h1>Projects</h1>
        <div>
            <div className={styles.divText}>
                <p className={styles.text}>All of the projects I have worked throughout my software developer experience have been in-house projects attached to NDAs. However, I can summerize some of them:</p>
            </div>
            <div className={styles.grid_skill}>
                <div className={styles.divText}>
                    <div className={styles.divText}>
                        <p className={styles.text}>One of the first projects I worked on was an app called "AppGenda", where schools could track arrival and dispatches of students, scores, and assignments. It consisted on three types of users, teachers, parents, and students and they all had different permissions within the app.</p>
                    </div> 
                </div>
                <div className={styles.aboutImage}>
                    <Image src="/appgenda.png" 
                        className={styles.image}
                        alt=""
                        width={150} height={150}/> 
                </div>

                <div className={styles.divText}>
                    <div className={styles.divText}>
                        <p className={styles.text}>There are two health insurance systems I have deeply worked on where you can basically adjudicate claims and manage the extensive information of clients and memebers of the system. I have mainly worked on these apps as a front and backend developer.</p>
                    </div> 
                </div>
                <div className={styles.aboutImage}>
                    <Image src="/healthinsurance.png" 
                        className={styles.image}
                        alt=""
                        width={150} height={150}/> 
                </div>
            </div>
        </div>
      </div>
    )
   }
   return (
    <div></div>
   );
}
