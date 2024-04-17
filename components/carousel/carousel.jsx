"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import Intruduction from '../introduction/introduction';
import styles from "../carousel/carousel.module.css"
import Skill from '../skills/skill';
import About from '../about/about';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import React from 'react'
import Projects from '../projects/projects';

const CarouselTest = () => {
  const [width, setWidth] = useState((typeof window !== 'undefined' && (window.innerWidth)));
  const [mounted, setMounted] = useState(false);
  const breakpoint = 1500;

  useEffect(() => {
    setMounted(true);
      const handleResizeWindow = () => {
        setWidth(window.innerWidth);
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
            <Carousel width={1550} showArrows={true} transitionTime="2000" infiniteLoop> 
               <div>
                 <Intruduction className={styles.text} />   
               </div>
               <div>
                <About />
               </div>
               <div>
                 <Skill /> 
               </div>
               <div>
                 <Projects /> 
               </div>
           </Carousel>
          </div>
        )
      } else {
        
        return (
          <div>
          <Intruduction />   
        </div>
      );
        
      }
     }
     return (
      <div></div>
     );
}

export default CarouselTest       