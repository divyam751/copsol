import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WhyCopsol from "./pages/WhyCopsol";
import MissionVision from "./pages/MissionVision";
import ManagingPartner from "./pages/ManagingPartner";
import Services from "./pages/Services";
import Clientele from "./pages/Clientele";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import TopScroller from "./components/TopScroller";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhyCopsol />
      <MissionVision />
      <ManagingPartner />
      <Services />
      <Clientele />
      <ContactUs />
      <TopScroller />
    </div>
  );
};

export default App;
