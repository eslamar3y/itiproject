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

    // Update total price at the bottom of the table
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

  // get user data from local storage
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  // get orders from local storage
  let orders = localStorage.getItem("orders");
  orders = JSON.parse(orders);

  //   get all orders for the current user
  let userOrders = [];
  if (user) {
    userOrders = orders.filter((order) => {
      if (order.user.id === user.id) {
        return order.cart;
      }
    });
  }

  // get the last order for the current user
  let lastOrder = userOrders[userOrders.length - 1];
  console.log(lastOrder);

  let handlecheckout = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    // get cart items where user id matches current user id
    cart = cart.filter((item) => item.user_id === user.id);

    // calculate total price
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    // create order object
    let order = {
      user: user,
      cart: cart,
      total: total,
    };

    // create order in locla storage
    let orders = localStorage.getItem("orders");
    orders = JSON.parse(orders);

    if (orders) {
      orders.push(order);
    } else {
      orders = [order];
    }

    localStorage.setItem("orders", JSON.stringify(orders));

    // clear cart items where user id matches current user id

    cart = cart.filter((item) => item.user_id !== user.id);
    localStorage.setItem("cart", JSON.stringify(cart));

    _navigate("/checkout");
  };

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
            {currentCart.length > 0 && (
              <>
                <tr>
                  <td colSpan={6} className="text-end">
                    <button
                      className="btn btn-primary"
                      onClick={handlecheckout}
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              </>
            )}
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">
                <h3>Last Order</h3>
              </td>
            </tr>
            <tr>
              {lastOrder ? (
                <td colspan="6">
                  <table>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {lastOrder.cart.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{(item.price * item.quantity).toFixed(2)}</td>
                            <td></td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colspan="2">
                          <h5>Order Total</h5>
                        </td>
                        <td colspan="3">
                          <h5>{lastOrder.total}</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              ) : (
                <td colspan="6">
                  <h5>No recent orders</h5>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
