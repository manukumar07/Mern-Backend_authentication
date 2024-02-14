import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // let handle the form submission
 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/auth/login", user);

  //     if (response.status === 200) {
  //       const responseData = response.data;
  //       console.log("after login: ", responseData);
  //       // Handle the response as needed (e.g., redirect to home)
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

     // let handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        // toast.success("Registration Successful");
        // saveTokenInLocalStr(responseData.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='form-login'>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter an email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name="password"
            placeholder='Enter a Password'
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
