import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/checkout.css";

const Checkout = () => {
  let _navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // get user data from local storage
    let user = localStorage.getItem("user");
    user = JSON.parse(user);

    // get orders from local storage
    let orders = localStorage.getItem("orders");
    orders = JSON.parse(orders);

    // get all orders for the current user
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

    // get cart data from last order and update state
    setOrder(lastOrder.cart);
    setTotal(lastOrder.total);
    setUserName(user.username);
  }, []);

  const handlePrint = () => {
    window.print();
  };
  const handleBack = () => {
    _navigate("/cart");
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <div className="card">
        <div
          className="card-header"
          style={{ display: "flex", "justify-content": "space-between" }}
        >
          <span>
            Invoice
            <strong>01/01/01/2018</strong>
          </span>
          <span className="float-right">
            {" "}
            <strong>Status:</strong> Pending
          </span>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h6 className="mb-3">From:</h6>
              <div>
                <strong>Webz Poland</strong>
              </div>
              <div>Madalinskiego 8</div>
              <div>71-101 Szczecin, Poland</div>
              <div>Email: info@webz.com.pl</div>
              <div>Phone: +48 444 666 3333</div>
            </div>

            <div className="col-sm-6">
              <h6 className="mb-3">To:</h6>
              <div>
                <strong>{userName}</strong>
              </div>
              <div>Attn: Daniel Marek</div>
              <div>43-190 Mikolow, Poland</div>
              <div>Email: marek@daniel.com</div>
              <div>Phone: +48 123 456 789</div>
            </div>
          </div>

          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Item</th>

                  <th className="right">price</th>
                  <th className="center">Qty</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="center">{i + 1}</td>
                      <td className="left strong">{item.title}</td>
                      <td className="right">${item.price}</td>
                      <td className="center">{item.quantity}</td>
                      <td className="right">${item.price * item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-5"></div>

            <div className="col-lg-4 col-sm-5 ml-auto">
              <table className="table table-clear">
                <tbody>
                  <tr>
                    <td className="left">
                      <strong>Subtotal</strong>
                    </td>
                    <td className="right">${total}</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong>Discount (0%)</strong>
                    </td>
                    <td className="right">$0</td>
                  </tr>

                  <tr>
                    <td className="left">
                      <strong>Total</strong>
                    </td>
                    <td className="right">
                      <strong>${total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <button className="hide-on-print btn btn-info" onClick={handleBack}>
          Back
        </button>
        <button
          className="hide-on-print btn btn-success ml-5"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Checkout;
