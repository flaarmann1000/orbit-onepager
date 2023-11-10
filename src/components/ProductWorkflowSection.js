import React from "react";
import img_aggregation from ".././assets/aggregating-data.png";
import img_sustainability from ".././assets/sustainability.png";
import img_design from ".././assets/design.png";

function ProductWorkflowSection() {
  return (
    <div className="product-workflow-section">
      <div className="row my-4">
        <div className="col-1"></div>
        <div className="col-md-11">
          <p className="tagline">PRODUCT</p>
          <h3>automated workflow</h3>
          <p>
            guidance and robust decision making from early ideation stages to
            product development.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-3 card">
          <div className="row my-4">
            <div className="col-auto">
              <img src={img_aggregation} alt="Icon" />
            </div>
            <div className="col">
              <h4>aggregating data</h4>
            </div>
          </div>
          <p>
            ingest client data, and combine it with integrated industry standard
            databases, e.g, ecoinvent, agribalyse.
          </p>
        </div>
        <div className="col-md-3 card">
          <div className="row my-4">
            <div className="col-auto">
              <img src={img_design} alt="Icon" />
            </div>
            <div className="col">
              <h4>designing concepts</h4>
            </div>
          </div>
          <p>
            ai-supported holistic concept; modelling based on high level
            commands - also lets you ingest design files, or simulate different
            scenarios with your model
          </p>
        </div>
        <div className="col-md-3 card">
          <div className="row my-4">
            <div className="col-auto">
              <img src={img_sustainability} alt="Icon" />
            </div>
            <div className="col">
              <h4>assessing sustainability</h4>
            </div>
          </div>
          <p>
            generation of LCA studies (ISO 14040), as well as strategic
            recommendations. carbon footprint, water and land use - just to name
            a few - orbit has holistic standards
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductWorkflowSection;
