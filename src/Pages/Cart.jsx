import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ updateCartCount }) => {
  useEffect(() => {
    updateCartCount();
  }, []);

  let _navigate = useNavigate();

  let handleplus = (id) => {
    // Select the quantity input element within the current row
    let quantity = document.querySelector(`.quantity-${id}`);
    quantity.value = parseInt(quantity.value) + 1;

    // Update in local storage
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity = quantity.value;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update total price within the current row
    let price = document.querySelector(`.price-${id}`);
    let tprice = document.querySelector(`.tprice-${id}`);

    // Calculate the total price and format it to two decimal places
    const totalPrice =
      parseInt(quantity.value) * parseFloat(price.innerHTML.replace("$", ""));
    tprice.innerHTML = `$${totalPrice.toFixed(2)}`;
    updateCartCount();
  };

  let handleminus = (id) => {
    // Select the quantity input element within the current row
    let quantity = document.querySelector(`.quantity-${id}`);
    if (quantity.value > 1) {
      quantity.value = parseInt(quantity.value) - 1;

      // Update in local storage
      let cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);
      cart.forEach((item) => {
        if (item.id === id) {
          item.quantity = quantity.value;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update total price within the current row
      let price = document.querySelector(`.price-${id}`);
      let tprice = document.querySelector(`.tprice-${id}`);

      // Calculate the total price and format it to two decimal places
      const totalPrice =
        parseInt(quantity.value) * parseFloat(price.innerHTML.replace("$", ""));
      tprice.innerHTML = `$${totalPrice.toFixed(2)}`;
      updateCartCount();
    }
  };

  // make delete button work
  let deleteItem = (id) => {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    cart.forEach((item) => {
      if (item.id === id) {
        cart.splice(item, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  };

  // let cart = "";
  let currentCart = [];

  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  if (cart) {
    let user = localStorage.getItem("user");
    if (!user) {
      _navigate("/login");
    } else {
      user = JSON.parse(user);
      currentCart = cart.filter((item) => item.user_id === user.id);
      console.log(currentCart);
    }
  }

  return (
    <>
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
            {currentCart.length > 0 ? (
              currentCart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className={`imgtd imgtd-${item.id}`}>
                      <img
                        src={`Images/${item.image}`}
                        alt="Item"
                        className="itemImage"
                      />
                    </td>
                    <td>
                      <Link
                        to={`/product/${item.id}`}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td>
                      <i
                        className="fa-solid fa-minus"
                        onClick={() => handleminus(item.id)}
                      ></i>
                      <input
                        type="text"
                        className={`quantity quantity-${item.id}`}
                        value={item.quantity}
                        readOnly
                      />
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => handleplus(item.id)}
                      ></i>
                    </td>
                    <td className={`price price-${item.id}`}>{item.price}</td>
                    <td className={`tprice tprice-${item.id}`}>
                      {(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td>
                      <i
                        className="fa-solid fa-trash text-danger"
                        onClick={() => deleteItem(item.id)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="p-5">
                  <h6>No Items in the cart</h6>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
