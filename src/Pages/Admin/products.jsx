import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CardsData } from "../../Data/CardsData";
import "../../style/Dashboard.css";
import AddData from "../../components/AddData";
import SideBar from "../../components/SideBar";

const Products = () => {
  const [Data, setData] = useState(CardsData);

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
      <SideBar />

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
