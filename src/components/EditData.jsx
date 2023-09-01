// EditData.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';


function EditData(props) {
  const { show, onHide, editedProduct, handleEditChange, handleSaveEdit } = props;

  const handleSaveChanges = () => {
    handleSaveEdit(editedProduct);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div className="form-group">
        <label className='form-label' htmlFor="input-id">Id</label>
            <input
            
              type="text"
              name="id"
              id="input-id"
              className="form-control"
              value={editedProduct.id || ''}
              onChange={handleEditChange}
            />
          </div>
          <div className="form-group">
          <label className='form-label' htmlFor="input-title">Title</label>
            <input
              type="text"
              name="title"
              id="input-title"
              className="form-control"
              value={editedProduct.title || ''}
              onChange={handleEditChange}
            />
          </div>
          <div className="form-group">
          <label className='form-label' htmlFor="input-price">Price</label>
            <input
              type="text"
              name="price"
              id="input-price"
              className="form-control"
              value={editedProduct.price || ''}
              onChange={handleEditChange}
            />
          </div>
          <div className="form-group">
          <label className='form-label' htmlFor="input-des">Description</label>
            <input
              type="text"
              name="description"
              id="input-des"
              className="form-control"
              value={editedProduct.description || ''}
              onChange={handleEditChange}
            />
          </div>
          {/* Add Image */}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHide}>
          Close
        </button>
        <button className="btn btn-primary" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditData;
