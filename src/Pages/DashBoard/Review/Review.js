import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth';

const Review = () => {

    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth()
    const onSubmit = (data) => {
        fetch("https://still-everglades-27844.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    },[])
      .then((res) => res.json())
      .then((result) => console.log(result));

        console.log(data)
    }
    return (
        <div className="add-service">
            <h2>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input
       {...register("email", { required: true, maxLength: 20 })}
        placeholder="Email" 
        value={user.email}
        name="email"
        /> 
      <br/><br/>
      <input 
      {...register("comments", { required: true, maxLength: 20 })}
       placeholder="comments"
       name="comments"
       /> 
       <br />
       <br />
      
      <input style={{backgroundColor:"yellowgreen", borderRadius:"20px"}} type="submit" />
    </form>
        </div>
    );
};

export default Review;