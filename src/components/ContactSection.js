import React from "react";

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="row justify-content-center py-3">
        <div className="col-auto">
          <h4>
            let's talk! <i className="fas fa-envelope"></i>
          </h4>
        </div>
        <div className="col-12 text-center">
          <a href="/impressum">Impressum</a> |{" "}
          <a href="/datenschutz">Datenschutz</a> |{" "}
          <a href="/cookies">Cookies</a> | <a href="linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
