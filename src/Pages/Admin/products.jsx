// Products.js
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { CardsData } from '../../Data/CardsData';
import '../../style/Dashboard.css';
import AddData from '../../components/AddData';
import SideBar from '../../components/SideBar';
import EditData from '../../components/EditData';

const Products = () => {
  const [Data, setData] = useState(CardsData);
  const [editedProduct, setEditedProduct] = useState({});
  const [editedIndex, setEditedIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      const updatedData = Data.filter((item) => item.id !== id);
      setData(updatedData);
    }
  };


  const handleEdit = (product, index) => {
    setEditedProduct(product);
    setEditedIndex(index);
    setShowEditModal(true);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };
  const handleSaveEdit = (updatedProduct) => {
    const updatedData = [...Data];
    updatedData[editedIndex] = updatedProduct;
    setData(updatedData);
    setShowEditModal(false);
  };


  const Add = (obj) => {
    let newArr = [...Data, obj];
    setData(newArr);
  };

  return (
    <div className="products d-flex">
      <SideBar />
      <div className="content p-4" style={{ flex: 1 }}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-center mb-5">Products</h2>
          <AddData cardData={Data} Add={Add} />
        </div>
        <Table striped bordered hover responsive className="align-middle dashboard-t">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={`/images/${item.image}`} alt="" />
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(item, index)}
                  >
                    Edit
                  </button>
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
            ))}
          </tbody>
        </Table>
      </div>

      <EditData
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        editedProduct={editedProduct}
        handleEditChange={handleEditChange}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
};

export default Products;
