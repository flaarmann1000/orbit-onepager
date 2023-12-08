import React from "react";
import vision from ".././assets/vision_image.png";
import "../styles/VisionSection.scss";
import join from ".././assets/join.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function VisionSection() {
  return (
    <div className="section ">
      <br />
      <Row>
        <Col lg="1" md="1" />

        <Col xl="9" lg="9" md="9" className="purple-card">
          <br />
          <Row>
            <Col lg="5" md="8">
              <br />
              <h3>→ add your impact</h3>
              <br />
              <p>
                we are looking for a full-stack software developer to join our
                team as <b>CTO</b>.
                <br />
                <br />
                you should bring along advanced expertise with <b>
                  front-end
                </b>{" "}
                and <b> back-end</b> technologies.
                <br /> <br />
                expertise with <b>LLM application frameworks </b>
                and machine learning platforms is appreciated.
                <br /> <br />
                naturally you should share our passion for
                <b> sustainability and entrepreneurship</b>.
              </p>
              <br />
              <a href="mailto:mariana@orbit-sustainability.com">
                <button className="btn btn-primary">Meet the team</button>
              </a>
            </Col>
            {/* <Col lg="1" md="4"></Col> */}
            <Col lg="4" md="6" className="offset-xl-2 offset-lg-2 offset-md-3">
              <br />
              <div className="d-flex justify-content-center align-items-center height-100">
                <img
                  src={join}
                  alt="Vision 2025"
                  className="img-fluid circle"
                />
              </div>
              <br />
            </Col>
          </Row>
          <br />
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default VisionSection;
