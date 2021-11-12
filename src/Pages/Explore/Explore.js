import React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Explore = ({explore}) => {
    const {id, name, price, description, img} = explore
    return (
        <div>
           <div>
            <Card className="service" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Name:{name}</Card.Title>
    <Card.Text>
      description:{description}
    </Card.Text>
    <Card.Title>price:{price}$</Card.Title>
    <Link to="/purchase">
    <Button className="m-4">Purchase  </Button>
    </Link>
    
  </Card.Body>
</Card>
            
        </div>
        </div>
    );
};

export default Explore;