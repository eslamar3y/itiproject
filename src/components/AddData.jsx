import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../style/addProduct.css";


function AddData(props) {
    let [id, setId] = useState(0)
    let [title, setTitle] = useState("")
    let [image, setImage] = useState("")
    let [price, setPrice] = useState("")
    let [description, setDescription] = useState("")
    let [show, setShow] = useState(false);

    // handle image change
    const inputRef = useRef(null);
    const handleImage = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file.name);
        setImage(file.name);
    }

    let Add = () => {
        let newObj = { id, title, image, price, description };
        props.Add(newObj);
        setShow(false);
    }

    let handleShow = () => {
        setShow(true);
    }
    let handleClose = () => {
        setShow(false);
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="id-class">
                            <label className='form-label' htmlFor="input-id">Id</label>
                            <input className='form-control' type="number" name="id" id="input-id" min={1} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div className="title-class mt-1">
                            <label className='form-label' htmlFor="input-title">Title</label>
                            <input className='form-control' type="text" name="title" id="input-title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="price-class mt-1">
                            <label className='form-label' htmlFor="input-price">Price</label>
                            <input className='form-control' type="text" name="price" id="input-price" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="des-class mt-1">
                            <label className='form-label' htmlFor="input-des">Description</label>
                            <input className='form-control' type="text" name="description" id="input-des" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="img-upload d-flex flex-column align-items-center" onClick={handleImage}>
                            {image ? <img src={`/Images/${image}`} alt='' /> :
                                <>
                                    < p className='text-black-50 m-0 fs-5 fw-bold'>Upload Image</p>
                                    <img src="/Images/upload.jpg" alt='' />
                                </>
                            }
                            <input type="file" ref={inputRef} onChange={handleImageChange} className='d-none' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Add}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddData;