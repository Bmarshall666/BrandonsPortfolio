import React from 'react';
import './NavigationBar.css'; 
import { useState } from 'react';
import { useEffect } from 'react';

const NavigationBar = () => {

    const [scroll, setScroll] = useState("navigation-bar");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScroll("navigation-bar-scrolled");
                console.log("Scrolled more than 10px");
            } else {
                setScroll("navigation-bar");
                console.log("At the top of the page");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
  return (
   <nav className={scroll}>
      <h2>BM</h2>
      <ul className="nav-links">
        <li className="nav-item"><a href="About">About</a></li>
        <li className="nav-item"><a href="Projects">Projects</a></li>
        <li className="nav-item"><a href="Skills">Skills</a></li>
        <li className="nav-item"><a href="Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
