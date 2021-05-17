import React from 'react';
import styles from "./Footer.css";

const footer = () => {
    return (
   
        <div style={styles.footerNav} className="footerNav">        
        <nav>
            
            <ul>
                
                <li>
                    <a href="/#github">gitHub</a>
                </li>

                    

                <li>
                    <a href="/#linkedin">Linkedin</a>
                </li>

            </ul>
        </nav>
    </div> 
        
    )
}

export default footer;