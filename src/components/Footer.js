import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="section footer-section">
      {/* <Row> */}
      <Row className="align-items-center" style={{ height: "100%" }}>
        <Col xs="1" />
        <Col xs="1">
          <a href="http://felixlaarmann.de/imprint/">Imprint</a>
        </Col>
        <Col xs="1">
          <a href="https://www.linkedin.com/company/orbit-sustainability/">
            LinkedIn
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
