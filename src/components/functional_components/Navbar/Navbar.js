import React from 'react'; 
import { Link, Navlink } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';




const Navigation = props => {
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Startseite</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button variant="primary" onClick={props.onClick}>{ props.webId? "Logout" : "Login"}</Button>
    </Navbar>
    )
}

export default Navigation; 