import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactSection() {
  return (
    <div className="section contact-section yellow-background">
      <br />
      <br />
      <br />
      <Row>
        <Col lg="1"></Col>
        <Col lg="3">
          <p>
            sounds <br />
            interesting? → <i className="fas fa-envelope"></i>
          </p>
        </Col>
        <Col lg="1"></Col>
        <Col>
          <h3>
            <a
              className="talk-cta"
              href="mailto:mariana@orbit-sustainability.com"
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
