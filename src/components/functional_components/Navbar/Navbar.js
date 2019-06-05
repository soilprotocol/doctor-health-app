import React from 'react'; 
import { Link, Navlink } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import styles from "./Navbar.module.css";

const Navigation = props => {
    console.log(props.webId);
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home" className={styles.navbar}>DOCTOR INTERFACE</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="request">Request</Nav.Link>
        <Nav.Link href="patient">PatientDetails</Nav.Link>
        </Nav>
        <Button variant="primary" onClick={props.onClick}>{ props.webId? "Logout" : "Login"}</Button>
    </Navbar>
    )
}

export default Navigation; 