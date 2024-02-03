import React, { Component } from "react";
import Spline from "@splinetool/react-spline";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Construction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false, // Initialize isDesktop state to false
    };
  }

  componentDidMount() {
    // invoke this for initial render
    this.handleWindowResize();
    // listen for resize event and handle resolution stuff in callback handler
    window.addEventListener("resize", this.handleWindowResize.bind(this));
  }

  componentWillUnmount() {
    // Clean up the event listener when the component unmounts
    window.removeEventListener("resize", this.handleWindowResize.bind(this));
  }

  handleWindowResize() {
    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;
    const isTablet = resolution >= 768 && resolution <= 1024;
    const isDesktop = !isMobile && !isTablet;
    // update state
    this.setState({ isDesktop });
  }

  render() {
    const { isDesktop } = this.state; // Destructure isDesktop from state
    return (
      <div className="section construction-section">
        <Row>
          <Col lg="1" />
          <Col lg="4">
            <br />
            <br />
            <br />
            <br />
            <h2>🚧 we are under construction</h2>
            <br />
            <p className="py-2">
              while over visually pleasing website is on vacation, <br></br>you
              can find all information right here:
              <br />
            </p>
            <p>
              <b>→ </b>
              <a
                className="big-link"
                href="https://orbit-sustainability.notion.site/orbit-resource-hub-2a36796736b144258c86424638413be3"
                target="_blank"
              >
                orbit resource hub
              </a>
            </p>
          </Col>
          <Col lg="1"></Col>
          {isDesktop && ( // Render Spline component conditionally based on isDesktop
            <Col lg="6">
              <div className="spline-wrapper">
                <Spline scene="https://prod.spline.design/p2dYCoKeIXSWWZZ8/scene.splinecode" />
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default Construction;
