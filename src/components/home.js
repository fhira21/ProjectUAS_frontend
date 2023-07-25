import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#00BFFF",
  };

  const contentStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#FF69B4",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#666",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Selamat Datang di Aplikasi Web</h2>
        <p style={paragraphStyle}>Silakan pilih opsi yang diinginkan:</p>

        <div>
          <Link to="/login">
            <button style={loginButtonStyle}>Login</button>
          </Link>
          <Link to="/register">
            <button style={registerButtonStyle}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
