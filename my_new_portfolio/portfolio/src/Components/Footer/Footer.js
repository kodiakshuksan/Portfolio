import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const footer = () => {
    return (
        
        <div>
            {<Navbar bg="light" expand="lg">
        
                <Nav className="mr-auto">
                    
                    <Nav.Link href="#GitHub">GitHub</Nav.Link>
                    <br></br>
                    <Nav.Link href="#Linkedin">Linkedin</Nav.Link>
                   
                </Nav>
                </Navbar>}
        </div>
                
        
    )
}

export default footer;