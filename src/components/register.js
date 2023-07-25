import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
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
        // Send a POST request to the backend to register the user
        const response = await axios.post(
          "http://localhost:5000/register",
          formData
        );
        console.log(response.data); // You can handle the response as needed

        // Redirect to '/login' on successful registration
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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
        <button type="submit" className="register-button">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

// CSS
const styles = `
  /* Custom CSS for Register page */
  .register-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
  }

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }

  .error-message {
    color: red;
    font-size: 16px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  input {
    padding: 10px;
    margin: 8px 0;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .register-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
  }

  .register-button:hover {
    background-color: #1f9041;
  }

  p {
    font-size: 16px;
    margin-top: 20px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Register;
