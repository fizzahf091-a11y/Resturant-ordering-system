import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/login');   // signup ke baad automatic login page pe le jy ga
  };
  return (
    <div  className="auth-page"
      style={{
        backgroundImage: "url(video/ai-generated-trendy-rooftop-bar-offering-panoramic-views-of-the-city-skyline-free-photo.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <div className="container">
        <h1 className="login">Admin Sign Up</h1>
        <form onSubmit={handleSubmit} className="aut-form">
          <label>
            <span className="label-text">Full Name</span>
            <input type="text" name="name" required placeholder="Enter Your Name" />
          </label>
          <label>
            <div className="label-text">Email Address</div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
            />
          </label>
          <label>
            <div className="label-text">Password</div>
            <input
              type="password"
              name="Password"
              id="Password"
              required
              minLength="6"
              placeholder="Enter Your Password"
            />
          </label>
          <label>
            <div className="label-text">Confirm Password</div>
            <input
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              required
              minLength="6"
            />
          </label>
          <button type="Submit" className="btn">Create Account</button>
        </form>
        <p className="box">
          Already Register? <br />
          <Link to="/admin/login"> log in instead</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp











// handleSubmit ek function hai jo form submit hone par call hota hai.

// (e) → yahan e ka matlab hai event object (jo browser deta hai jab form submit hota hai).

// e.preventDefault(); →
// Form ki default behaviour hoti hai page reload karna ya URL par data bhejna (traditional HTML form ki tarah).
// Yeh line kehti hai:

// “Form ko default tariqe se submit mat karo; main khud handle karunga.”

// navigate('/admin/login'); →
// Ye React Router ka function hai (jo tum useNavigate() hook se banate ho).
// Iska kaam hai:

// “User ko programmatically /admin/login route par le jao.”