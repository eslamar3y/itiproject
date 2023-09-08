import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  // get user date from local storage
  // get cart data from local storage

  let _navigate = useNavigate();

  useEffect(() => {
    // get user data from local storage

    let user = localStorage.getItem("user");
    user = JSON.parse(user);

    // get orders from local storage
    let orders = localStorage.getItem("orders");
    orders = JSON.parse(orders);

    //   get all orders for the current user

    let userOrders = orders.filter((order) => {
      return order.email === user.email;
    });

    // get the last order for the current user
    let lastOrder = userOrders[userOrders.length - 1];
    console.log(lastOrder);

    // display last order details to the current user
    alert(
      `Your order has been placed successfully. Order ID: ${orders.length}`
    );
  }, []);

  // redirect to orders page
  //   _navigate("/cart");
  // to print
  // window.print();

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
