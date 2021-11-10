import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../../Images/login-img.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    console.log(useState)
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginData(newLogindata)

    }

    const handleform = e => {
        if(loginData.password !== loginData.password2){
            alert('password is not match')
            return
        }
        e.preventDefault()
    }
    return (
        <Container>
        <Row>
          
          <Col xs={12} md={6} >
          <form onSubmit={handleform} style={{marginTop:'150px'}}>
          <h2> Register</h2>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input
        type="email"
        placeholder="Email"
        class="form-control"
        id="inputEmail3"
        onBlur={handleOnBlur}
        name="email"
         />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input
        type="password"
        placeholder="Password"
        class="form-control"
        id="inputPassword3"
        name="password"
        onBlur={handleOnBlur}
        />
    </div>
  </div>
  <div class="row mb-3">
    <label for="Re-type password" class="col-sm-2 col-form-label" > Confrom Password</label>
    <div class="col-sm-10">
      <input
        type="password"
        class="form-control"
        id="inputPassword3"
        placeholder="Re-type Password"
        name="password2"
        onBlur={handleOnBlur}
        />
    </div>
  </div>
  
  
  
  <NavLink style={{textDecoration:"none"}} to="/login">
    <Button variant="info">Already Register ! Login</Button>
    </NavLink>
</form>
              </Col>
          <Col xs={12} md={6}> 
          <img src={img} alt="" /> 
          </Col>
        </Row>
       
      </Container>
    );
};

export default Register;