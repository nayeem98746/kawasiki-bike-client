import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import login from "../../../Images/login-img.png"
import "./Login.css"

const Login = () => {
    const [loginFromData, setLoginFromData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleform = e => {
        alert('hellow')
        e.preventDefault()
    }
    return (
        <Container>
        <Row>
          
          <Col xs={12} md={6} >
          <form onSubmit={handleform} style={{marginTop:'150px'}}>
          <h2>Login</h2>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input
        type="email"
        class="form-control"
        id="inputEmail3"
        onBlur={handleOnChange}
        name="email"
         />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input
        type="password"
        class="form-control"
        id="inputPassword3"
        name="password"
        onBlur={handleOnChange}
        />
    </div>
  </div>
  
  
  <button type="submit" class="btn btn-primary">Sign in</button>
  <br /><br />
  <NavLink style={{textDecoration:"none"}} to="/register">
    <Button variant="info">Please Register</Button>
    </NavLink>
</form>
              </Col>
          <Col xs={12} md={6}> 
          <img src={login} alt="" /> 
          </Col>
        </Row>
       
      </Container>
    );
};

export default Login;