import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { useAuth } from "../Store/auth";


const Home = () => {
  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);

  return (
    <div className="container">
      <h1 className='h1-home'>Welcome to Home Page</h1>
      
      {/* <Link to="/login">
        <button className='login-home'>Login</button>
      </Link> */}
      
      {isLoggedIn ? (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup"> Signup </Link>
                  </li>
                  <li>
                    <Link to="/login"> Login </Link>
                  </li>
                </>
              )}
    </div>
  );
}

export default Home;
