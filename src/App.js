import React from "react";
import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import VisionSection from "./components/VisionSection";
import ProductWorkflowSection from "./components/ProductWorkflowSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App fluid">
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="row">
          <IntroSection />
        </div>

        <div className="row">
          <VisionSection />
        </div>

        <div className="row">
          <ProductWorkflowSection />
        </div>

        <div className="row">
          <TeamSection />
        </div>

        <div className="row">
          <ContactSection />
        </div>
      </main>
      <footer className="row">
        {/* Footer component or footnotes here */}
      </footer>
    </div>
  );
}

export default App;
