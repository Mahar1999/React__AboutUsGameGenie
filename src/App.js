import React from "react";

import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import classes from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
