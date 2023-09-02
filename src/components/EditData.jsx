import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import "../style/addProduct.css"
function EditData(props) {
  const {
    show,
    onHide,
    editedProduct,
    handleEditChange,
    handleSaveEdit,
  } = props;
  const [image, setImage] = useState(editedProduct.image || ''); // Initialize image state with editedProduct.image
  useEffect(() => {
    // Update image state when editedProduct.image changes
    setImage(editedProduct.image || '');
  }, [editedProduct.image]);

  let inputRef = useRef();
  const handleImage = () => {
    inputRef.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    editedProduct.image = file.name;
    setImage(editedProduct.image);
  }

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
          <div className="img-upload d-flex flex-column align-items-center" onClick={handleImage}>
            {image ? <img src={`/Images/${image}`} alt='' /> :
              <>
                < p className='upload-p text-black-50 m-0 fs-5 fw-bold'>Upload Image</p>
                <img src="/Images/upload.jpg" alt='' />
              </>
            }
            <input type="file" ref={inputRef} onChange={handleImageChange} className='d-none' />
          </div>
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



