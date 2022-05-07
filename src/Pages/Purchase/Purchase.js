import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Purchase.css'

const Purchase = () => {
    const { register, handleSubmit,reset } = useForm();
    const[bookingInfo, setBookingInfo] = useState({});


    const {user} = useAuth()
    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);
  }
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
  const {serviceId} =useParams();
    
  const [details, setDetails] = useState([])

  useEffect(() => {
      fetch(`http://localhost:5000/explore2`)
      .then(res => res.json())
      .then(data => setDetails(data))
      // .then(data => console.log(data))

  },[])
  const users = details?.find(use => use._id = serviceId);






  const purchase = () => {
    const order = {
      cus_name:user?.displayName,
      cus_email:user?.email,
      product_name:users?.name,
      product_profile:users?.description,
      product_image:users?.img,
      total_amount:users?.price,
    }
    fetch(`http://localhost:5000/init`, {
      method:'POST',
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      window.location.replace(data)
    } )
  }
    return (
        <div className="page-style">
        <h2 className="m-6" style={{color:'whitesmoke'}}  >YOUR INFORMATION TO ORDER</h2>
<div className="booking">
           <div className="offer-details"><img src={users?.img} alt="" />
           <h3 style={{color:'white'}}>{users?.name}</h3>
           <h5 style={{color:'white'}}>Price: {users?.price}</h5></div>
           <div className="order">
           <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })}  onBlur={handleOnBlur} placeholder= {user.displayName} />
            <input {...register("email", { required: true, maxLength: 20 })}  onBlur={handleOnBlur} placeholder={user.email} />
            <textarea style={{width:"80%", marginBottom:"30px"}} {...register("discription")} onBlur={handleOnBlur} placeholder='Address' />
            <input type="number" {...register("price")} onBlur={handleOnBlur} placeholder="Phone Number" />
            {/* <input type="phoneNumber" {...register("price")} onBlur={handleOnBlur} placeholder="Phone Number" /> */}
            <input className="bg-primary" type="submit" />
            <button onClick={purchase} style={{color:'whitesmoke', padding:'20px' , borderRadius:'10px' , background:'black'}}  >CheckOut-Payment</button>
           </form>
           </div>
        </div>
    </div>
    );
};

export default Purchase;