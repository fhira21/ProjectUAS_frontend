import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import "./register.css";

const Register = ({ handleRegister }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isFormFilled, setIsFormFilled] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Cek apakah semua data telah diisi dan atur nilai isFormFilled
        const isFilled = Object.values(formData).every((value) => value.trim() !== "");
        setIsFormFilled(isFilled);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the handleRegister function passed from the parent component
        handleRegister(formData);
        navigate("/");
        // Tampilkan notifikasi sukses jika diperlukan
        alert("User berhasil didaftarkan!");
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nama</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                    <label htmlFor="password">Password</label>
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
                    Daftar
                </button>
                <Link to="/" className="btn btn-link ml-2">
                    Sudah punya akun? Masuk disini.
                </Link>
            </form>
        </div>
    );
};

export default Register;
