import React from "react";
import vision from ".././assets/vision_image.png";
import "../styles/VisionSection.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function VisionSection() {
  return (
    <div className="section ">
      <br />
      <Row>
        <Col lg="2" />

        <Col lg="5" className="purple-card">
          {/* <br /> */}
          {/* <p className="tagline">JOIN THE TEAM</p> */}
          <Row>
            <Col lg="8">
              <br />
              <h3>→ add your impact</h3>
              <br />
              <p>
                we are looking for a full-stack software
                <br />
                developer to join our team as <b>CTO</b>.
                <br />
                <br />
                you should bring along advanced expertise <br />
                with <b>front-end</b> and <b> back-end</b> technologies.
                <br /> <br />
                expertise with <b>LLM application frameworks</b> <br />
                and machine learning platforms is appreciated.
                <br /> <br />
                naturally you should share our passion for
                <br />
                <b>sustainability and entrepreneurship</b>.
              </p>
            </Col>
            <Col lg="4">
              <div className="d-flex justify-content-center align-items-center height-100">
                <a href="mailto:mariana@orbit-sustainability.com">
                  <button className="btn btn-primary">Meet the team</button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default VisionSection;
