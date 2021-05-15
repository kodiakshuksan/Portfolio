import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        
        <div>
            {<Navbar bg="light" expand="lg">
        
                <Nav className="mr-auto">
                    <Nav.Link href="#home"></Nav.Link>
                    <br></br>
                    <Nav.Link href="#About">About</Nav.Link>
                    <br></br>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                    <br></br>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <br></br>
                    <Nav.Link href="#Contact Me">Contact Me</Nav.Link>
                </Nav>
        
                </Navbar>}
        </div>
                
        
    )
}

export default NavBar;
