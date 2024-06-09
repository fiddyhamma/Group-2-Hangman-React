import React from 'react';
import Navbar from '../components/Navbar';
import Game from '../Game'; // Assuming Game is the component containing the game logic

const Play = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Play Game</h1>
        <Game />
      </div>
    </>
  );
};

export default Play;