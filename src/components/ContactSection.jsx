import React from "react";
import "../style/contactus.css";
function ContactSection() {
  return (
    <div className="main min-vh-100 ">
      <div className="contain">
        <div className="form">
          <h1>Get in Touch</h1>
          <p>Feel Free to drop us a line below!</p>

          <input
            type="text"
            className="input inputt"
            required
            placeholder="Your Name"
          ></input>
          <br></br>
          <input
            type="email"
            className="input"
            required
            placeholder="Your Email"
          ></input>
          <br></br>
          <input
            type="textbox"
            className="input inputtext"
            required
            placeholder="Typing Your message here...."
          ></input>
          <br></br>

          <input type="submit" value="send" className="button"></input>
        </div>
        <div className="contact">
          <div className="seccontain">
            <h1>Contact Us</h1>

            <span>
              {" "}
              <i class="fa-solid fa-location-dot"></i>32,Mansoura 32524 NewCity
            </span>
            <br></br>
            <span>
              <i class="fa-solid fa-envelope"></i>maro@yahoo.com
            </span>
            <br></br>

            <span>
              <i class="fa-solid fa-phone"></i>+2765 7654 2105
            </span>
            <br></br>
            <span>
              {" "}
              <i class="fa-solid fa-print"></i>+4536 8732 5432
            </span>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
