import React from "react";
import Spline from "@splinetool/react-spline";

import "../styles/IntroSection.scss";

function IntroSection() {
  return (
    <div className="intro-section">
      <div className="row align-items-center py-5">
        <div className="col-1"></div>
        <div className="col-md-4">
          <p className="tagline">INTRO</p>
          <h2>[ˈɔʁbɪt] - crafting sustainable future products & services</h2>
          <p className="py-2">
            orbit is a software for consultancies, to cocreate, model, and
            analyze innovative sustainable products and services. It enables
            consultancies to expand their services toward their customers
            demand.
          </p>
        </div>
        <div className="col-md-6">
          <div className="spline-wrapper">
            <Spline scene="https://prod.spline.design/p2dYCoKeIXSWWZZ8/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
