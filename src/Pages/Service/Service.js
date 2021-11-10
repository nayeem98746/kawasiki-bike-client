import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, price, description, img}= service
    return (
        <div>
            <Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Name:{name}</Card.Title>
    <Card.Text>
      description:{description}
    </Card.Text>
    <Card.Title>price:{price}$</Card.Title>
    <Link ><Button variant="warning">Purchase  </Button></Link>
    
  </Card.Body>
</Card>
            {/* <h2>{id}</h2>
            <img width="150px" src={img} alt="" />
            <h2>Name:{name}</h2>
            <h5>Price: {price}</h5>
            <p>{description}</p> */}
        </div>
    );
};

export default Service;<h2>this is service</h2>