import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth';

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const [success, setSuccess] = useState(false)
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
          .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)

            }
            
            
        })
    }


       
    
    return (
        <div>
            <h3>make an admin</h3>
            
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
             {...register("email", { required: true, maxLength: 20 })}
            placeholder="Email" 
            type="email"
             name="email"
             /> <br /><br />
            <input type="submit" />
    </form>
    {success && <Alert >
    ADMIN SUCCESSFULY
  </Alert> }
        </div>
        
    );
};

export default MakeAdmin;