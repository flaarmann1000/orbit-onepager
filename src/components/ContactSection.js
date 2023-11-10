import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactSection() {
  return (
    <div className="section contact-section">
      <br />
      <br />
      <br />
      <Row>
        <Col lg="1"></Col>
        <Col lg="3">
          <p>
            Sounds <br />
            interesting? → <i className="fas fa-envelope"></i>
          </p>
        </Col>
        <Col lg="1"></Col>
        <Col>
          <h3>
            <a
              style={{ color: "black", "text-decoration": "none" }}
              href="mailto:orbit-sustainability@gmail.com"
            >
              let's talk! <i className="fas fa-envelope"></i>
            </a>
          </h3>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ContactSection;
