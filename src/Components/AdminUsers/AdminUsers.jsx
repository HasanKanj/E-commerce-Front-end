import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminUsers.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th className="users-table-header">Name</th>
            <th className="users-table-header">Email</th>
            <th className="users-table-header">Role</th>
            <th className="users-table-header">Phone Number</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="users-table-row">
              <td className="users-table-data">{user.firstName}</td>
              <td className="users-table-data">{user.email}</td>
              <td className="users-table-data">{user.phoneNumber}</td>
              <td className="users-table-data">{user.role}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
