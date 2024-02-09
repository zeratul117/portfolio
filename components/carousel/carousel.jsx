"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import Intruduction from '../introduction/introduction';
import styles from "../carousel/carousel.module.css"
import Skill from '../skills/skill';
import About from '../about/about';

const CarouselTest = () => {
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
     </Carousel>
    </div>



  )
}

export default CarouselTest       