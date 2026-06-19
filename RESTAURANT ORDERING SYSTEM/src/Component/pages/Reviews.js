import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    alert("Review Submitted!");
  };

  return (
    <div className="reviews-container">
      <button className="close-btn" title="Close">×</button>

      <div className="title-box">
        <h3>Add Review</h3>
      </div>

      <div className="form-box">
        <div className="form-group">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <p>Rating</p>
          <div className="stars">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={25}
                  onClick={() => setRating(starValue)}
                  onMouseOver={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}
                  color={(hover || rating) > index ? "#FFBA5A" : "#ccc"}
                  style={{ cursor: "pointer", marginRight: 5 }}
                />
              );
            })}
          </div>
        </div>

        <div className="form-group">
          <p>Comments</p>
          <textarea
            placeholder="Write your comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button className='save-btn' onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default Reviews;