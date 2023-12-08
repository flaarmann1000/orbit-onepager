import React from "react";
import Spline from "@splinetool/react-spline";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/IntroSection.scss";

function IntroSection() {
  return (
    <div className="section intro-section">
      <br />
      <br />
      <Row>
        <Col lg="1" />
        <Col lg="4">
          <p className="tagline">INTRO</p>
          <h2>[ˈɔʁbɪt] - crafting sustainable future products & services</h2>
          <p className="py-2">
            orbit is a software for consultancies to cocreate, model, and
            analyze innovative sustainable products and services. TEST
            <br />
          </p>
        </Col>
        <Col lg="1"></Col>
        <Col lg="6">
          <div className="spline-wrapper">
            <Spline scene="https://prod.spline.design/p2dYCoKeIXSWWZZ8/scene.splinecode" />
          </div>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}

export default IntroSection;
