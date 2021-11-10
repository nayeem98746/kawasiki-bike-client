import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Button, Link } from 'react-router-dom';
import page404 from "../../Images/404page.jpg"

const NotFound = () => {
    return (
        <div>
            <img src={page404} alt="" />
           <Link to="/" > <button>go back</button> </Link>
        </div>
    );
};

export default NotFound;