import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { register, handleSubmit,reset } = useForm();
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
       const user = {email}
       fetch('https://ancient-depths-09291.herokuapp.com/users/admin', {
           method:'PUT',
           headers:{
            'content-type' : 'application/json'
           },
           body: JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
           console.log(data)
       })
       e.preventDefault()
    }
    
    return (
        <div>
            <h3>make an admin</h3>
            
            <form onSubmit={handleAdminSubmit}>
            <TextField
            sx={{ width: '225px' }}
             label="Email" 
            type="Email"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <br/>
            <Button type="submit" variant="outlined">Make Admin</Button>


            </form>
    {success && <Alert >
    ADMIN SUCCESSFULY
  </Alert> }
        </div>
        
    );
};

export default MakeAdmin;