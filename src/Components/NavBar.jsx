import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Image Logo
import logo from "../assets/IMAGE/logo.svg";

// Active NavLink
import { NavLink } from "react-router-dom";

// Icons
// // import { FaRegUserCircle } from "react-icons/fa";

// CSS
import "../assets/CSS/Navbar.css";

function NavBar() {
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='Navbar'>
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to={"/"} activeclassname='nav-link active'>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={"/bantuan"}
              activeclassname='nav-link active'
            >
              Bantuan
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/register"} className='nav-link masuk'>
              Register{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
