import React from "react";
import "../style/aboutus.css";
function AboutSection() {
  return (
    <>
      <div className="min-vh-100">
        <div className="imgabout">
          <div className="secdiv">
            <h1>About Us</h1>
            <h4>Welcome To Our Website </h4>
            <h6>Good Food Starts With Good Ingedients .</h6>
            <p>
              {" "}
              As a heart-centered brand that cares about its global impct,
              <br></br>pizza website emphasizes that key part of its brand in
              its mission statement .<br></br> Describin your brand values and
              what you stand for is<br></br> one of the best ways to connect
              with your audince
            </p>
          </div>
        </div>

        <div className="animate">
          <h1>One Thousand Flavors in One Place</h1>
        </div>
      </div>

      <div className="thdiv">
        <div className="thdiv-div">
          <h6>MESAAGE FROM FOUNDER</h6>
          <h1>First, We eat. Then,We do everything else. </h1>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
