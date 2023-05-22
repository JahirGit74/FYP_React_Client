import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Navi from "./Navbar.module.css"
import {GiHamburgerMenu} from"react-icons/gi"

import image from "../../Images/p.png"

function Navbar(){
    const [ham,setHam]=useState(false)

    function toggleHam(){
        setHam(!ham)
    }

    useEffect(() => {
        const handleClick = (event) => {
          // Handle click event here
          if(ham){setHam(false);}
          console.log('Clicked anywhere!', event,ham);
        };
    
        document.addEventListener('click', handleClick);
    
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, []);

    return (
        <div>
            <div className={Navi.nav1}>
                <a href="#">
                <img src={image} alt="Logo"/>
                </a>
                <ul >
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"landanalysis"}>Land Analysis</Link></li>
                    <li><Link to={"inspection"}>Damage Inspection</Link></li>
                    <li><Link to={"sentiment"}>Sentiment Analysis</Link></li>
                    <li><Link to={"login"}>Login</Link></li>
                </ul>
                <button className={Navi.ham}  onClick={toggleHam}><GiHamburgerMenu></GiHamburgerMenu></button> 
            </div>
            {ham===true && <div className={Navi.nav2}>
                <ul >
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"landanalysis"}>Land Analysis</Link></li>
                    <li><Link to={"inspection"}>Damage Inspection</Link></li>
                    <li><Link to={"sentiment"}>Sentiment Analysis</Link></li>
                    <li><Link to={"login"}>Login</Link></li>
                </ul></div>}
        </div>
    )
    };

export default Navbar;