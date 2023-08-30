import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CardsData } from "../../Data/CardsData";
import { Link } from "react-router-dom";

const Products = () => {
  const [filteredproducts, setFilteredproducts] = useState(CardsData);
  return (
    <div className="products d-flex ">
      {/* Sidebar (wider and full height) */}
      <div
        className="sidebar bg-dark text-light p-4 text-center"
        style={{ flexBasis: "15%", "min-height": "100vh" }}
      >
        <h2 className="text-white">Sidebar</h2>
        <ul className="list-unstyled">
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
        </ul>
      </div>

      {/* Content (takes remaining width) */}
      <div className="content p-4" style={{ flex: 1 }}>
        {/* Content area with a Bootstrap table */}
        <h2>Content</h2>
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
            {CardsData.map((item) => {
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
                    <button class="btn btn-danger">Delete</button>
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
