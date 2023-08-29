import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/cart.css";

const Cart = () => {
  let handleplus = () => {
    let quantity = document.querySelector(".quantity");
    quantity.value = parseInt(quantity.value) + 1;
    let price = document.querySelector(".price");
    let tprice = document.querySelector(".tprice");
    tprice.innerHTML =
      "$" +
      parseInt(quantity.value) * parseFloat(price.innerHTML.replace("$", ""));
  };
  let handleminus = () => {
    let quantity = document.querySelector(".quantity");
    if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;
      let price = document.querySelector(".price");
      let tprice = document.querySelector(".tprice");
      tprice.innerHTML =
        "$" +
        parseInt(quantity.value) * parseFloat(price.innerHTML.replace("$", ""));
    }
  };

  return (
    <>
      <Header />
      <div className="container cartContainer pt-5">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="imgtd">
                <img src="Images/1.jpg" alt="Item" className="itemImage" />
              </td>
              <td>Item Name</td>
              <td>
                <i class="fa-solid fa-minus" onClick={handleminus}></i>
                <input type="text" className="quantity" value="1" readOnly />
                <i class="fa-solid fa-plus" onClick={handleplus}></i>
              </td>
              <td className="price">$10.99</td>
              <td className="tprice">$10.99</td>
              <td>
                <i class="fa-solid fa-trash text-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="item">
          <img src="Images/1.jpg" alt="Item" className="itemImage" />
          <div className="itemDetails">
            <h4 className="itemName">Item Name</h4>
            <p className="itemPrice">Price: $10.99</p>
            <p className="itemQuantity">Quantity: 2</p>
            <p className="itemTotal">Total: $21.98</p>
          </div>
        </div> */}
        {/* <div className="item">
          <img
            src="path_to_your_item_image.jpg"
            alt="Item"
            className="itemImage"
          />
          <div className="itemDetails">
            <h4 className="itemName">Item Name</h4>
            <p className="itemPrice">Price: $10.99</p>
            <p className="itemQuantity">Quantity: 2</p>
            <p className="itemTotal">Total: $21.98</p>
          </div>
        </div>
        <div className="item">
          <img
            src="path_to_your_item_image.jpg"
            alt="Item"
            className="itemImage"
          />
          <div className="itemDetails">
            <h4 className="itemName">Item Name</h4>
            <p className="itemPrice">Price: $10.99</p>
            <p className="itemQuantity">Quantity: 2</p>
            <p className="itemTotal">Total: $21.98</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
