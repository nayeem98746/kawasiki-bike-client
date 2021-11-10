import React from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Images/logo.jpg'

const Header = () => {
  const {user ,  logout} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home"> <img width="8%" src={logo} alt="" />  </Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            
          
              
           {
             user?.email ? 
              <Button onClick={logout} >Logout</Button>
             :
           <Nav.Link as={Link} to="/login">
             <Button>LogIn</Button>
             </Nav.Link>}
           
           
            
            <Navbar.Text>
              Signed in as: <a href="#login">displayname</a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;