import React from "react";
import vision from ".././assets/vision_image.png";
import "../styles/VisionSection.scss";

function VisionSection() {
  return (
    <div className="vision-section">
      <div className="row align-items-center py-5">
        <div className="col-1"></div>
        <div className="col-md-5">
          <img src={vision} alt="Vision 2025" className="img-fluid" />
        </div>
        <div className="col-md-3">
          <p className="tagline">ABOUT</p>
          <h3>Vision 2025</h3>
          <p>
            we believe in a future, where sustainability plays a major role in
            the development-process of products and services - not afterwards,
            in the accounting. In the described future, we created the tool, to
            do so: <br /> <br />
            orbit, leading the way in <b>sustainable innovation</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
