"use client"
import Image from "next/image";
import styles from "../about/about.module.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import ErrorPage from 'next/error'

export default function About() {
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
        <h1>About</h1>
        <div>
            <div className={styles.aboutImage}>
                <Image src="/aboutImage.png" 
                    className={styles.image}
                    alt=""
                    width={210} height={300}/> 
            </div>
            <div className={styles.divText}>
                <p className={styles.text}><span className={styles.spanText}>Howdy! </span>I'm a dedicated and hardworking developer originally from the Dominican Republic. I've aquired multiple software developing skills that have allowed me to move my career forward and become a permanent resident of Canada by working as a software developer for a big company here in Sudbury called ClaimSecure. I love learning new technologies and ways to code things. I don't stop pushing until I get what I need in life.</p>
            </div>
        </div>
      </div>
    )
   }
   return (
    <div></div>
   );
}
