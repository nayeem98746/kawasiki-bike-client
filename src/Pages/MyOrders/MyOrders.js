import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [user, setUser] = useState([])
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://frozen-spire-15774.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    } ,[orders.email])
    const handleDelete = id =>{
        const warning = window.confirm('are you want delete user')
        if(warning){
          const url = `https://frozen-spire-15774.herokuapp.com//orders/${id}`
          fetch( url, {
              method: 'DELETE'
  
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  alert('successfull delete user')
                 
                  setOrders(data.deletedCount)
              }
          })
        }
      }
    return (
        <div>
            <h3>you have placed : {orders.length}Orders</h3>
            <ul>
                {
                    orders.map(order => <div
                    key={order._id}
                    style={{display:'flex'}}

                    >
                        <h4 style={{color:'black'}}>{order.name}</h4> 
                        <h4> {order.email}</h4>
                        <h4>{order.address}</h4>
                        <button style={{
                            backgroundColor:'greenyellow',
                            borderRadius:'10px'

                    
                            }} >update</button>
                        <button style={{
                             backgroundColor:'red',
                             borderRadius:'10px',
                             color:'whitesmoke'

                        }} onClick={() => handleDelete(orders._id)}>Remove</button>
                    </div> )
                }
            </ul>
        </div>
    );
};

export default MyOrders;