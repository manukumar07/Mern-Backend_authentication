import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <h1 className='h1-home'>Welcome to Home Page</h1>
      
      <Link to="/login">
        <button className='login-home'>Login</button>
      </Link>
    </div>
  );
}

export default Home;
