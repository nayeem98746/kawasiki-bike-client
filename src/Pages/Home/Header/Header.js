import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Images/logo.jpg'

const Header = () => {
  const {user ,  logout} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home"> <img width="8%" src={logo} alt="" /> Kawasaki  </Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/explores">Explore</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            
          
              
           {
             user?.email ? 
             <Container >
               <Nav.Link as={Link} to="/dashboard">
             <Button>Dashboard</Button>
             </Nav.Link>
                <Button onClick={logout} >Logout</Button>
             </Container>
             
             :
           <Nav.Link as={Link} to="/login">
             <Button>LogIn</Button>
             </Nav.Link>}
           
           
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.email}</a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;