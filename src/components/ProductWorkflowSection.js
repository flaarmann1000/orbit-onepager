import React from "react";
import img_aggregation from ".././assets/aggregating-data.png";
import img_sustainability from ".././assets/sustainability.png";
import img_design from ".././assets/design.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductWorkflowSection() {
  return (
    <div className="section product-workflow-section">
      <Row my="4">
        <Col md="1" />
        <Col md="11">
          <p className="tagline">PRODUCT</p>
          <h3>automated workflow</h3>
          <p>
            guidance and robust decision making from early ideation stages to
            product development.
          </p>
        </Col>
      </Row>
      <Row className="card-container">
        <Col lg="1" />
        <Col lg="3" className="card">
          <Row className="my-4">
            <Col md="auto">
              <img src={img_aggregation} alt="Icon" />
            </Col>
            <Col>
              <h4>aggregating data</h4>
            </Col>
          </Row>
          <p>
            ingest client data, and combine it with integrated industry standard
            databases, e.g, ecoinvent, agribalyse.
          </p>
        </Col>
        <Col lg="3" className="card">
          <Row className="my-4">
            <Col md="auto">
              <img src={img_design} alt="Icon" />
            </Col>
            <Col>
              <h4>designing concepts</h4>
            </Col>
          </Row>
          <p>
            ai-supported holistic concept; modelling based on high level
            commands - also lets you ingest design files, or simulate different
            scenarios with your model
          </p>
        </Col>
        <Col lg="3" className="card">
          <Row className="my-4">
            <Col md="auto">
              <img src={img_sustainability} alt="Icon" />
            </Col>
            <Col>
              <h4>assessing sustainability</h4>
            </Col>
          </Row>
          <p>
            generation of LCA studies (ISO 14040), as well as strategic
            recommendations. carbon footprint, water and land use - just to name
            a few - orbit has holistic standards
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ProductWorkflowSection;
