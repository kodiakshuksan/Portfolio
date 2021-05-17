import React from 'react'
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
import styles from './NavStyle.css';


const NavBar  = () => {
    return (

        <div style={styles.navBar} className="navBar">        
            <nav>
                
                <ul>
                    
                    <li>
                        <a href="/"></a>
                    </li>

                        

                    <li>
                        <a href="/#about">About</a>
                    </li>

                        

                    <li>
                        <a href="/#resume">Resume</a>
                    </li>

    

                    <li>
                        <a href="/#Projects">Projects</a>
                    </li>

                

                    <li>
                        <a href="/#Contact">Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    
    )
}


export default NavBar;
