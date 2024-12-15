// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doha from "./pages/Doha";
import Singapore from "./pages/Singapore";
import Kyoto from "./pages/Kyoto";
import Epilogue from "./pages/Epilogue";
import References from "./pages/References";
import CreativeProcess from "./pages/CreativeProcess"; // Ensure file name and import match exactly

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
          <Route path="/references" element={<References />} />
          <Route path="/CreativeProcess" element={<CreativeProcess />} /> {/* Matches Link in Navbar */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
