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
    <div className={scroll}>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="about">About</a>
          </li>
          <li className="nav-item">
            <a href="projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
