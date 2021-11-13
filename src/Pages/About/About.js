import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/factory.jpg'

const About = () => {
    return (
        
           <Container>
               <h2> Kawasaki Company</h2>
  <Row>
    <Col>
    <img src={img}  alt="" />
    </Col>
    <Col>
    Kawasaki Aircraft initially manufactured motorcycles under the Meguro name, having bought an ailing motorcycle manufacturer, Meguro Manufacturing with whom they had been in partnership. This eventually became Kawasaki Motor Sales.[2] Some early motorcycles display an emblem with "Kawasaki Aircraft" on the fuel tank.

During 1962, Kawasaki engineers were developing a four-stroke engine for small cars. Then some of the engineers transferred to the Meguro factory to work on the Meguro K1 and the SG, a single cylinder 250 cc OHV. In 1963, Kawasaki and Meguro merged to form Kawasaki Motorcycle Co.,Ltd.[3][4] Kawasaki motorcycles from 1962 through 1967 used an emblem which can be described as a flag within a wing.

Work continued on the Meguro K1, a copy of the BSA A7 500 cc vertical twin.[5] and on the Kawasaki W1. The K2 was exported to the U.S. for a test in response to the expanding American market for four-stroke motorcycles. At first it was rejected for a lack of power. By the mid-1960s, Kawasaki was finally exporting a moderate number of motorcycles. 


    </Col>
  </Row>
  
</Container>
       
    );
};

export default About;