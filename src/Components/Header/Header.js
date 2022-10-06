import { Button } from 'bootstrap';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
    <Navbar className='bg-dark' expand="lg">
      <Container fluid>

        <Navbar.Brand className='text-light' href="#">
            
            <img src={logo}  alt="" />
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light fw-bold' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#action2">shop</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#action2">Order</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#action2">Manage</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;