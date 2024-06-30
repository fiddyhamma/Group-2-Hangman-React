import React from 'react';
import './Word.css'

function Keypad({ onKeyPress }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keypad">
      {letters.map((letter) => (
        <button
          key={letter}
          className="keypad-button"
          onClick={() => onKeyPress(letter.toLowerCase())}  // ensure lowercase for consistency
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

function Word({ selectedWord, correctLetters, onLetterChange }) {
  return (
    <div className="word-container">
      <div className="word">
        {selectedWord.split('').map((letter, i) => (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        ))}
      </div>
      <Keypad onKeyPress={onLetterChange} />
    </div>
  );
}

export default Word;
