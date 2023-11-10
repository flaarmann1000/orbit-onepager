import React from "react";
import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import VisionSection from "./components/VisionSection";
import ProductWorkflowSection from "./components/ProductWorkflowSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="p-0">
      <Header></Header>
      <main>
        <IntroSection />
        <VisionSection />
        <ProductWorkflowSection />
        <TeamSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
