import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doha from "./pages/Doha";
import Singapore from "./pages/Singapore";
import Kyoto from "./pages/Kyoto";
import Epilogue from "./pages/Epilogue"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doha" element={<Doha />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/kyoto" element={<Kyoto />} />
          <Route path="/epilogue" element={<Epilogue />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
