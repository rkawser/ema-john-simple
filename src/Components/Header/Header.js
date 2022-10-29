import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

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
{ user ?
            <button style={{ 'background': 'red', 'color': 'white' }}  onClick={()=>signOut(auth)}>signOut</button>
            :
            <Link to='/login' className='text-light fw-bold text-decoration-none me-2' href="#action2">Login</Link>}

            <span style={{'color': 'red'}}>{user? user?.displayName + ':)' : " "} </span>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;