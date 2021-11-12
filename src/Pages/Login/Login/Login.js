import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink,useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import login from "../../../Images/login-img.png"
import "./Login.css"

const Login = () => {
    const [loginFromData, setLoginFromData] = useState({})
    const {user,  loginUser, isLoading,authError} = useAuth()

  const location = useLocation()
  const history = useHistory()


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
      loginUser(loginFromData.email, loginFromData.password , location, history)
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
    {user?.email && [

'success'

].map((variant, idx) => (
<Alert key={idx} variant={variant}>
  This is a {variant} successful!
</Alert>
)) }
{authError && [

'danger'

].map((variant, idx) => (
<Alert key={idx} variant={variant}>
  {authError}
</Alert>
))}
</form>
<br />
{user?.email && <Alert >
    LOGIN SUCCESSFULY
  </Alert> }
  
              </Col>
          <Col xs={12} md={6}> 
          <img src={login} alt="" /> 
          </Col>
        </Row>
       
      </Container>
    );
};

export default Login;