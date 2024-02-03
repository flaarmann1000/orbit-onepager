import React from "react";
import "./App.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import VisionSection from "./components/VisionSection";
import ProductWorkflowSection from "./components/ProductWorkflowSection";
import TeamSection from "./components/TeamSection";
import JoinSection from "./components/JoinSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Construction from "./components/Construction";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="p-0">
      <Header></Header>
      <Construction></Construction>
      {/* <main>
        <IntroSection />
        <VisionSection />
        <ProductWorkflowSection />
        <TeamSection />
        <JoinSection />
        <ContactSection />
      </main>*/}
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
