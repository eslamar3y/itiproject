import React from "react";
import "../style/contactus.css";

function ContactSection() {
  return (
    <div className="main min-vh-100 ">
      <div className="form col-12 col-md-5">
        <div className="hp">
          <h1>Get in Touch </h1>
          <p>Feel free to drop us a line below!</p>
        </div>
        <div className="frm ">
          <input
            type="text"
            className=" input px-2"
            required
            placeholder="  Your Name"
          ></input>
          <br></br>
          <input
            type="email"
            className=" input px-2"
            required
            placeholder="  Your Email"
          ></input>
          <br></br>
          <input
            type="textbox"
            className=" input inputtext px-2"
            required
            placeholder="  type Your Message Here...."
          ></input>
          <br></br>
          <input type="submit" className="inputt" value="send"></input>
        </div>
      </div>
      <div className="contact d-none d-lg-block ">
        <div className="cnt mx-5">
          <h1>Contact Us</h1>
          <span>
            <i class="fa-solid fa-location-dot mx-4"></i>32,Mansora ,64NewCity
          </span>
          <span>
            <i class="fa-solid fa-envelope mx-4"></i> mano@yahoo.com
          </span>
          <span>
            <i class="fa-solid fa-phone mx-4"></i>+334 7648 8906
          </span>
          <span>
            <i class="fa-solid fa-print mx-4"></i>+2659 8685 7535
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
