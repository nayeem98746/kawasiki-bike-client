import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Purchase.css'

const Purchase = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ancient-depths-09291.herokuapp.com/orders', data)
        .then(res => {
          if(res.data.insertedId){
              alert('added successfully')
              reset()
          }
      }) 
    
  }
    return (
        <div className="page-style">
        <h2 className="m-6" style={{color:'whitesmoke'}}  >YOUR INFORMATION TO ORDER</h2>
        <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
  <input   {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" defaultValue= {user.displayName} /> <br /><br />
  <input   {...register("email", { required: true, maxLength: 20 })} placeholder="Your email" defaultValue={user.email} /> <br /><br />
  <textarea  {...register("address")} placeholder="Address" /><br /><br />
  <input  type="number" {...register("number")} placeholder="phone Number" /><br /><br />
  

  <input style={{
    backgroundColor:"pink",
    borderRadius:"25px",
    color:"whitesmoke"
  }}  type="submit" />
</form>
    </div>
    );
};

export default Purchase;