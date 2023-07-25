import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if username or password is empty
      if (!formData.username || !formData.password) {
        setErrorMessage("Username and password cannot be empty");
      } else {
        // Send a POST request to the backend to log in the user
        const response = await axios.post(
          "http://localhost:5000/login",
          formData
        );
        console.log(response.data); // You can handle the response as needed

        // Redirect to '/list' on successful login
        window.location.href = "/list";
      }
    } catch (error) {
      // Handle login error and display appropriate error message
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        console.error("Error logging in:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
