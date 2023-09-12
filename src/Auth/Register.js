import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserClass from "../Data/userClass";
import userArray from "../Data/userArray";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

const Register = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    window.location.href = "/";
  }

  const [formData, setFormData] = useState({
    // name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const _navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for username (minimum 4 characters, maximum 20 characters)
    const usernameRegex = /^[a-zA-Z0-9_-]{4,20}$/;
    if (!usernameRegex.test(formData.username)) {
      setErrorMessage(
        "Username should be 4 to 20 characters and contain only letters, numbers, '-' or '_'"
      );
      return;
    }
    // check if username already exists
    const user = userArray.find((user) => user.username === formData.username);
    if (user) {
      // User exists
      console.log("User exists");
      // Redirect to home page or perform further actions
      setErrorMessage("Username already exists");
      return;
    }

    // Validate for phone number
    const phoneNumberRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setErrorMessage("Invalid phone number");
      return;
    }

    // Validation for email pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    // Validation for password (minimum 6 characters)
    if (formData.password.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
      return;
    }

    // Validation for repeated password
    if (formData.password !== formData.repeatPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // If all validations pass, clear the error message
    setErrorMessage("");

    // You can proceed with the registration logic here
    console.log("Registration successful!");
    //   make new user object and push it to userArray
    let x = userArray.length + 1;
    const newUser = new UserClass(
      x++,
      formData.username,
      formData.email,
      formData.phoneNumber,
      formData.password,
      "user"
    );
    userArray.push(newUser);
    console.log(userArray);
    //   redirect to login page using navigate
    _navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container
      className="vh-100"
      style={{
        minWidth: "100%",
        height: "100%",
        backgroundImage: "url(Images/bg_3.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Row className="justify-content-center register align-items-center h-100">
        <Col md={6} lg={4}>
          <div>
            <h2 className="text-center text-muted">Register</h2>
            <div
              className="register-form active"
              aria-labelledby="tab-register"
            >
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerUsername">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="registerPhoneNumber"
                    className="form-control"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                  onClick={handleSubmit}
                >
                  Register
                </button>

                {errorMessage && (
                  <div className="error text-danger text-center mb-3">
                    {errorMessage}
                  </div>
                )}

                <div className="text-center">
                  <p>
                    Have an account? <Link to="/login">Login</Link>
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

export default Register;
