import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://still-everglades-27844.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2>Our products  reviews {reviews.length}  </h2>
            <div className=" p-5" style={{ display: 'grid' }} >
                {
                    reviews.map(review => <div className="p-4" style={{ border: '2px solid black' }}>
                        <h4 style={{ color: 'black' }}>user: {review.email}</h4>
                        <p style={{ color: 'black' }}>comment: {review.comments}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;