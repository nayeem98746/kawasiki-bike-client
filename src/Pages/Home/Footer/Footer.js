import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bg-color">
            <h3>Wellcome  to our Kawasaki family  </h3>
            <h5>You can unsubscribe at any time</h5>
            <input type="email" placeholder="YOUR EMAIL" /> 
            <button className="btn-subscribe">Subscribe</button>
            <Container >
                <Row>
                  <Col xs={12} md={6}>
                  <div>
                         <h2 style={{color:'whitesmoke'}}>About us</h2>
                        <li>How it works</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Terms of Service</li>
                    </div>      
                      </Col>
                  <Col xs={12} md={6}>
                  <div>
                         <h2 style={{color:'whitesmoke'}}>Videos</h2>
                        <li>Submit Video</li>
                        <li>Ambassadors</li>
                        <li>Agency</li>
                        <li>Influencer</li>
                    </div>
                      </Col>
               
                
                  <Col xs={12} md={6}><div >
                    <h2 style={{color:'whitesmoke'}}>Contact Us</h2>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </div>
                </Col>
                  <Col xs={12} md={6}>
                      <div>
                        <h2 style={{color:'whitesmoke'}}>Social Media</h2>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                </div>
                </Col>
                 
                </Row>
            </Container>
            <div className="icon-style">
                {/* <img width="50px" src={logo} alt="" /> */}
                <h2 className="ps-3">Ⓒ <samp>2020</samp></h2>
            </div>
        </div>
    );
};

export default Footer;



<div className=" row main-style  ">
<div className="col-md-6">


</div>
<div>


</div>
</div>