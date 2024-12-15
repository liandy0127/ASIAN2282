import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Chronicle of Asian Cities in 2050</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/doha">Doha</Link>
      <Link to="/singapore">Singapore</Link>
      <Link to="/kyoto">Kyoto</Link>
      <Link to="/epilogue">Epilogue</Link>
    </div>
  </nav>
);

export default Navbar;
