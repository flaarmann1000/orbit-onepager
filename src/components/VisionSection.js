import React from "react";
import vision from ".././assets/vision_image.png";
import "../styles/VisionSection.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function VisionSection() {
  return (
    <div className="section vision-section">
      <br />
      <Row>
        <Col lg="1" />
        <Col lg="5">
          <img src={vision} alt="Vision 2025" className="img-fluid" />
        </Col>
        <Col lg="3">
          <br />
          <p className="tagline">ABOUT</p>
          <h3>vision 2025</h3>
          <p>
            we believe that shaping a sustainable future requires us to do more
            than accounting and reporting environmental impacts. <br />
            <br />
            it requires us to rethink innovation and development processes. with
            orbit we create a tool to do so:
            <br /> <br />
            orbit, leading the way in <b>sustainable innovation</b>.
          </p>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default VisionSection;
