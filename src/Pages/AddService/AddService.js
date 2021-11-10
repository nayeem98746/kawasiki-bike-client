import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('url' , data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfuly')
                reset()
            }
        })
    }
    return (
        <div className="add-service">
            <h2>Please Add  a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description" )} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img" )} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;