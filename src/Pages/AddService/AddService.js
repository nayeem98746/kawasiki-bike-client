import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-spire-15774.herokuapp.com/explore' , data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added explore successfuly')
                reset()
            }
        })
    }
    return (
        <div  className="add-service">
            <h2>Please Add  a service in bike  </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> 
      <br/><br/>
      <textarea {...register("description" )} placeholder="Description" /><br/><br/>
      <input type="number" {...register("price")} placeholder="price" /><br/><br/>
      <input {...register("img" )} placeholder="img url" /><br/><br/>
      <input  type="submit" />
    </form>
        </div>
    );
};

export default AddService;