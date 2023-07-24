import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleLogin, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let isFilled = true;
    if (value.trim() === "") {
      isFilled = false;
    }
    setIsFormFilled(isFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Periksa apakah semua kolom telah diisi
    if (isFormFilled) {
      // Panggil fungsi handleLogin yang diteruskan dari komponen induk
      handleLogin(formData);
      navigate("/list"); // Gunakan fungsi navigate untuk mengarahkan ke "/list"
      alert("Anda berhasil login!");
    } else {
      alert("Harap isi semua data yang diperlukan.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isFormFilled}>
          Masuk
        </button>
        
        <Link to="/register" className="btn btn-link ml-2">
          Belum punya akun? Daftar disini.
        </Link>
      </form>
    </div>
  );
};

export default Login;
