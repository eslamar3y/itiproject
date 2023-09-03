import React, { useState } from "react";
import { Table } from "react-bootstrap";
import userArray from "../../Data/userArray";
import SideBar from "../../components/SideBar";
import "../../style/Dashboard.css";

const Users = () => {
  // Create a state variable to hold the filtered user data
  const [filteredUsers, setFilteredUsers] = useState(userArray);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      // Filter the userArray and update the state with the filtered data
      const updatedUsers = filteredUsers.filter((user) => user.id !== id);
      setFilteredUsers(updatedUsers);
    }
  };

  return (
    <div className="users d-flex">
      <SideBar />

      {/* Content (takes remaining width) */}
      <div className="content p-4" style={{ flex: 1 }}>
        {/* Content area with a Bootstrap table */}
        <h2>Content</h2>
        <Table striped bordered hover responsive className="align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="btn btn-warning disabled">
                        Admin
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
