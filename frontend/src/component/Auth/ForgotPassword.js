import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Password reset instructions sent to your email.");
      } else {
        setMessage("Failed to send password reset instructions.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setMessage("Failed to send password reset instructions.");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email address:
          <input type="email" value={email} onChange={handleChange} required />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Remember your password? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
