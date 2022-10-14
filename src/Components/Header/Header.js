import { Button } from 'bootstrap';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='bg-dark' expand="lg">
      <Container fluid>

        <Navbar.Brand className='text-light' href="#">

          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='text-light fw-bold text-decoration-none me-2' href="#action1">Home</Link>
            <Link to='/shops' className='text-light fw-bold text-decoration-none me-2' href="#action2">shops</Link>
            <Link to='/order' className='text-light fw-bold text-decoration-none me-2' href="#action2">Order</Link>
            <Link to='/manage' className='text-light fw-bold text-decoration-none me-2' href="#action2">Manage</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;