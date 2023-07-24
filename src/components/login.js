import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("test")
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("https://project-uas-backend.vercel.app/login", loginData);
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Reset the form fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Link
            to="/home"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            login
          </Link>
    </form>
  );
};

export default LoginForm;