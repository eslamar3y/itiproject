import React from "react";
import "../style/aboutus.css";
function AboutSection() {
  return (
    <>
      <div className=" main min-vh-100  mx-5">
        <div className="first col-12  text-center mt-1">
          <h5>OUR MISSION</h5>
          <h1>Good food start with good ingredients</h1>
          <p>
            As a heart-centered brand that cares about its global impact our
            website emphasizes that key part of its brand in its mission
            <br></br>
            Describing your brand values and what you stand for is one of the
            best ways to connect with your audience in this site<br></br> we
            help people reserve whatever food they want by making it easier ,you
            will got services you need i hope it admires you,finally.<br></br>
            thanks for registering.
          </p>
        </div>

        <div className="second">
          <div className="one col-12 col-xxl-9  ">
            <h5>Beyond the boundariees of taste</h5>
            <h1>One Thousand flavors in one place</h1>
            <h3 className="mb-5">creating website for impact</h3>
            <p>
              in this site we wll make you sustified of our services<br></br> we
              did our best for your comfort .<br></br>
              Describing your brand values and what you stand for is one of the
              <br></br> best ways to connect with your audience in this<br></br>{" "}
              site we help people reserve whatever food they want<br></br> by
              making it easier ,you will got services you need i hope it admires{" "}
              <br></br>you and dont forget our slogan "First, We eat.Then, we do
              everything else.
            </p>
          </div>
          <div className="two  d-none d-xxl-block  "></div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
