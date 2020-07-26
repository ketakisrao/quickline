import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './index.scss';

const product_name = "Quickline"
function CustomNavbar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand><Link to="/">{product_name}</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Process" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/discovery">Discovery</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/ideation">Ideation</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/prototype">Prototype</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/solution">Solution</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
