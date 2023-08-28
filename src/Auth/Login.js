import React, { useState } from "react";
import { Link } from "react-router-dom";
import userArray from "../Data/userArray";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
        // User exists
        console.log("User exists");
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
    <div className="container">
      <div className="login">
        <div className="tab-content">
          <div
            className="tab-pane fade show active login-form"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form className="login-form">
              <div className="form-outline mb-4 mt-5">
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
              </div>

              <div className="form-outline mb-4">
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
              </div>
              <div className="error text-danger text-center mb-3 d-none">
                plaese enter your username and password
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
      </div>
    </div>
  );
};

export default Login;
