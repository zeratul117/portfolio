// "use client"

// import Link from 'next/link'
// import { FiAlignJustify, FiXCircle } from "react-icons/fi";
// import styles from "../navbar/navbar.module.css"
// import { useState, useEffect } from 'react';
// import "./Navbar.css"
// import About from '../about/about';

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false);
//     const [width, setWidth] = useState(window.innerWidth);
//     const breakpoint = 768;
  
//     useEffect(() => {
//         const handleResizeWindow = () => setWidth(window.innerWidth);
//          window.addEventListener("resize", handleResizeWindow);
//          return () => {
//            window.removeEventListener("resize", handleResizeWindow);
//          };
//        }, []);

//     const handleShowNavbar = () => {
//       setShowNavbar(!showNavbar);
//     };
    
//     if (width < breakpoint) {
//         return (
//             <nav className="navbar">
//               <div className="container">
//                 <div className="menu-icon" onClick={handleShowNavbar}>
//                   <FiAlignJustify className="navIcon" />
//                 </div>
//                 <div className={`nav-elements  ${showNavbar && "active"}`}>
//                   <ul>
//                     <li>
//                       <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                       <Link href="/about">Blogs</Link>
//                     </li>
//                     <li>
//                       <div>Projects</div>
//                     </li>
//                     <li>
//                       <div>About</div>
//                     </li>
//                     <li>
//                       <div>Contact</div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           );
//     }
//     return (
//         <div></div>
//     );
//   };

//   export default Navbar;
"use client"

import Link from 'next/link'
import { FiAlignJustify, FiXCircle } from "react-icons/fi";
import styles from "../navbar/navbar.module.css"
import { useState, useEffect } from 'react';
import "./Navbar.css"
import About from '../about/about';
import React from 'react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [width, setWidth] = useState((typeof window !== 'undefined' && (window.innerWidth)));
    const breakpoint = 768;

    useEffect(() => {
      setMounted(true)
      const handleResizeWindow = () => setWidth(window.innerWidth);
       window.addEventListener("resize", handleResizeWindow);
       return () => {
         window.removeEventListener("resize", handleResizeWindow);
       };
     }, []);


    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };

    if (width < breakpoint && mounted) {
      return (
        <nav className="navbar">
             <span className="menu_icon" onClick={handleShowNavbar} >
               <FiAlignJustify size={40} className="navIcon"/>
             </span>
             <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <Link href="/">Introduction</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
              </ul>
             </div>
        </nav>
      );
    }
    return (
      <div></div>
    );
  };

  export default Navbar;