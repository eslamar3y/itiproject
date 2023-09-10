import React, { useState } from "react";
import { Link } from "react-router-dom";
import userArray from "../Data/userArray";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

const Login = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    window.location.href = "/";
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const _navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here, for example:
    if (formData.username.trim() === "" || formData.password.trim() === "") {
      // Show error message
      document.querySelector(".error").classList.remove("d-none");
      return;
    } else {
      // Hide error message
      document.querySelector(".error").classList.add("d-none");
      // Check if user exists
      const user = userArray.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
        // console.log(user)
      );
      if (user) {
        // Save user to local storage
        localStorage.setItem("user", JSON.stringify(user));
        if (user.role === "admin") {
          // Navigate to admin page
          _navigate("/admin/products");
        } else {
          // Navigate to home page
          _navigate("/");
        }

        // Redirect to home page or perform further actions
      } else {
        // User does not exist
        console.log("User does not exist");
        // Show error message
        document.querySelector(".error").textContent =
          "User not found, please try again";
        document.querySelector(".error").classList.remove("d-none");
      }
    }

    // If validation passes, you can access the username and password
    const { username, password } = formData;
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form data after submission
    setFormData({ username: "", password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container
      className="vh-100 logindiv"
      style={{
        minWidth: "100%",
        height: "100%",
        backgroundImage: "url(Images/bg_3.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6} lg={4}>
          <div className="login border rounded p-3">
            <h2 className="text-center ">Login</h2>
            <div
              className="tab-pane fade show active login-form"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form className="login-form">
                <Form.Group className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginName">
                    Username
                  </label>
                  <input
                    type="text"
                    id="loginName"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <div className="error text-danger text-center mb-3 d-none">
                  Please enter your username and password.
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>

                <div className="text-center">
                  <p>
                    Not a member? <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
