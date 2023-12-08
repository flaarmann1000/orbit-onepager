import React from "react";
import team from ".././assets/team_image.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TeamSection() {
  return (
    <>
      <div className="section team-section">
        <Row>
          <Col md="1" />
          <Col md="9">
            <p className="tagline">TEAM</p>
            <h3>behind orbit</h3>
            <br />
            <img src={team} alt="Team" className="img-fluid" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="1" />
          <Col md="4">
            <h4>
              different backgrounds, united by a shared goal & mindset - This is
              orbit.
            </h4>
          </Col>
          <Col md="1" />
          <Col md="4">
            <p>
              we are an interdisciplinary and international team, with a strong
              and broad background. We are proficient in the fields of
              automation, engineering, design as well as sustainability. this
              enables us as a team, to build a tool, that is ready to change the
              status quo of sustainable product and service innovation.
            </p>
          </Col>
        </Row>
      </div>
      <div className="background-offset"></div>
    </>
  );
}

export default TeamSection;
