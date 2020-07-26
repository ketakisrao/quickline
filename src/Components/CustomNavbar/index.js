import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.scss';

const product_name = "Quickline"
function CustomNavbar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">{product_name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Process" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Discovery</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ideation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Prototype</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Solution</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
