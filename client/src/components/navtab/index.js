import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function NavTab() {
    return (
        <Navbar collapseOnSelect expand="sm" id="myNavbar">
            <Navbar.Brand id="myBrand"><FontAwesomeIcon icon={faGlobe} className="social" id="globe"/><Link to="/" id="myLink">My Bank Credit Union</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link">Checkings and Savings</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link to="/" className="nav-link">Loans and Credit Cards</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link to="/" className="nav-link">Resources</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/" className="nav-link" >Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/" className="nav-link" >Sign In</Link>
                    </Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTab;