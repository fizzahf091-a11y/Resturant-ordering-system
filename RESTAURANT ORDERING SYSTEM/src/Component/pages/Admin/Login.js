import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/admin/dashboard');   // login ke baad automatic dashboard pe le jy ga
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
        <h1 className="login">Admin Login</h1>
        <form className="aut-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <div className="label-text">Email Addres</div>
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
              id="password"
              required
              minLength="6"
              placeholder="Enter Your Password"
            />
          </label> <br />
          <button type="button" className="btn" onClick={handleLogin}>Login in</button>
        </form><br />
        <p className="box">
          Create Account? <br />
          <Link to="/admin/Dashboard">Restaurant Admin Dashboard &raquo;</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
