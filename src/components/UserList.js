import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://project-uas-backend.vercel.app/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://project-uas-backend.vercel.app/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <div className="level">
          <div className="level-left">
            <Link to="/add" className="button is-success mr-2">
              Add New
            </Link>
          </div>
          <div className="level-right">
            <button className="button is-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`/edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
