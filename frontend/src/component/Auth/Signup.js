import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault(e);
  //     console.log(user);
  //   };
  // //

  // try {
  //     const response = await fetch("http://localhost:5000/api/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });
  //     console.log("response data : ", response);

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       alert("registration successful");
  //       setUser({ username: "", email: "", phone: "", password: "" });
  //       console.log(responseData);
  //     } else {
  //       console.log("error inside response ", "error");
  //     }
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };
  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response data: ", response);

      if (response.status === 200) {
        const responseData = response.data;
        response.json("Registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
      } else {
        console.log("Error inside response");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="signup-container">
      <h1>SignUp Here!</h1>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          value={user.name}
          onChange={handleInput}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter an email"
          value={user.email}
          onChange={handleInput}
        />
        <br />

        <label>Phone Number:</label>
        <input
          type="number"
          name="phone"
          placeholder="Enter a number"
          value={user.phone}
          onChange={handleInput}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter a Password"
          value={user.password}
          onChange={handleInput}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already an account? <Link to="/login">Login </Link>
      </p>
    </div>
  );
};

export default Signup;
