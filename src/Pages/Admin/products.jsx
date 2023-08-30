import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CardsData } from "../../Data/CardsData";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Dashboard.css";
import AddData from "../../components/AddData";

const Products = () => {
  const [Data, setData] = useState(CardsData);

  let _navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      const updatedUsers = Data.filter((item) => item.id !== id);
      setData(updatedUsers);
    }
  };

  const Add = (obj) => {
    let newArr = [...Data, obj];
    setData(newArr);
  }

  return (
    <div className="products d-flex ">
      <div
        className="sidebar bg-dark text-light p-4 text-center"
        style={{ flexBasis: "12%", minHeight: "100vh" }}
      >
        <ul className="list-unstyled">
          <h2 className="text-white">Sidebar</h2>
          <li className=" mt-5">
            <Link
              to="/admin/products"
              className="text-light text-decoration-none btn btn-outline-info"
              style={{ width: "120px" }}
            >
              Products List
            </Link>
          </li>
          <li className=" mt-3">
            <Link to="/admin/users" className="text-light text-decoration-none btn btn-outline-secondary" style={{ width: "120px" }}>
              Users List
            </Link>
          </li>
          <li className=" mt-3">
            <Link
              to="/"
              className="text-light text-decoration-none btn btn-outline-warning"
              style={{ width: "120px" }}
            >
              Home
            </Link>
          </li>
          <li className=" mt-3">
            <button
              className="text-light text-decoration-none btn btn-outline-danger"
              style={{ width: "120px" }}
              onClick={() => {
                _navigate("/");
                localStorage.removeItem("user");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Content (takes remaining width) */}
      <div className="content p-4" style={{ flex: 1 }}>
        {/* Content area with a Bootstrap table */}
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" text-center mb-5">Products</h2>
          <AddData cardData={Data} Add={Add} />
        </div>
        <Table striped bordered hover responsive className="align-middle dashboard-t">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={`/images/${item.image}`} alt="" />
                  </td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
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

export default Products;
