import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, price, description, img}= service
    return (
        <div>
            <Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" width='200px' height='200px' src={img} />
  <Card.Body>
    <Card.Title>Name:{name}</Card.Title>
    <Card.Text>
      description:{description}
    </Card.Text>
    <Card.Title>price:{price}$</Card.Title>
    <Link to={`/purchase/${_id}`} ><Button variant="warning">Purchase  </Button></Link>
    
  </Card.Body>
</Card>
            
        </div>
    );
};

export default Service;