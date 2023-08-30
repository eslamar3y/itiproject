import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CardsData } from "../../Data/CardsData";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Dashboard.css";

const Products = () => {
  const [filteredproducts, setFilteredproducts] = useState(CardsData);

  let _navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      const updatedUsers = filteredproducts.filter((item) => item.id !== id);
      setFilteredproducts(updatedUsers);
    }
  };

  return (
    <div className="products d-flex ">
      <div
        className="sidebar bg-dark text-light p-4 text-center"
        style={{ flexBasis: "15%", "min-height": "100vh" }}
      >
        <ul className="list-unstyled">
          <h2 className="text-white">Sidebar</h2>
          <li className=" mt-3">
            <Link
              to="/admin/products"
              className="text-light text-decoration-none"
            >
              Products
            </Link>
          </li>
          <li className=" mt-3">
            <Link to="/admin/users" className="text-light text-decoration-none">
              Users
            </Link>
          </li>
          <li className=" mt-5">
            <Link
              to="/"
              className="text-light text-decoration-none btn btn-outline-warning"
              style={{ width: "70%" }}
            >
              Go to home
            </Link>
          </li>
          <li className=" mt-3">
            <button
              className="text-light text-decoration-none btn btn-outline-danger"
              style={{ width: "70%" }}
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
        <div className="d-flex justify-content-between">
          <h2 className=" text-center mb-5">Products</h2>
          <button className="btn btn-primary" style={{ height: "38px" }}>
            add product
          </button>
        </div>
        <Table striped bordered hover responsive className="align-middle">
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
            {filteredproducts.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={`/images/${item.image}`} alt="" />
                  </td>
                  <td>
                    <button class="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>$19.99</td>
                    <td>Description of Product 1</td>
                    </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
