import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/duels">Duels</Link>
        </li>
        <li>
          <Link to="/game">Play Hangman</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
