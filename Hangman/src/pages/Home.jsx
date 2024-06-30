import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header'
import Figure from '../components/figure/Figure';
import WrongLetters from '../components/wrongLetters/WrongLetters';
import Word from '../components/word/Word';
import Notification from '../components/notification/Notification';
import Popup from '../components/popup/Popup';
import { showNotification as show } from '../Helpers/Helpers'
import './Home.css';

const words = [
  { word: 'html', hint: 'Standard markup language for web pages' },
  { word: 'programming', hint: 'Writing computer code' },
  { word: 'css', hint: 'Style sheet language for web pages' },
  { word: 'style', hint: 'How something looks' },
  { word: 'form', hint: 'Web element for user input' },
  { word: 'mediaquery', hint: 'CSS technique to apply styles for different devices' },
  { word: 'tables', hint: 'HTML element to display tabular data' },
  { word: 'padding', hint: 'Space inside an element, around content' },
  { word: 'margin', hint: 'Space outside an element, around border' },
  { word: 'flexbox', hint: 'CSS layout model for flexible layouts' },
  { word: 'class', hint: 'CSS selector for styling multiple elements' },
  { word: 'id', hint: 'Unique CSS selector for styling single element' },
  { word: 'iframes', hint: 'HTML element to embed another document' },
  { word: 'semantics', hint: 'Meaning of HTML elements' },
  { word: 'selectors', hint: 'CSS patterns to select elements' },
  { word: 'boxmodel', hint: 'CSS concept for element sizing' },
  { word: 'opacity', hint: 'CSS property for transparency' },
  { word: 'specificity', hint: 'CSS rules precedence' },
  { word: 'color', hint: 'CSS property for text color' },
  { word: 'float', hint: 'CSS property for positioning' }
];

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#34495e;'; // Set your desired color
    
// Cleanup function to reset the background color when the component is unmounted
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);
      
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setshowNotification] = useState(false);
  const [selectedWordObj, setSelectedWordObj] = useState(() => words[Math.floor(Math.random() * words.length)]);

  const handleLetterChange = (letter) => {
    if (selectedWordObj.word.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setcorrectLetters((currentLetters) => [...currentLetters, letter]);
      } else {
        show(setshowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setwrongLetters((currentLetters) => [...currentLetters, letter]);
      } else {
        show(setshowNotification);
      }
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        handleLetterChange(letter);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    setcorrectLetters([]);
    setwrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    setSelectedWordObj(words[random]);
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Word
          selectedWord={selectedWordObj.word}
          correctLetters={correctLetters}
          onLetterChange={handleLetterChange}
        />
        <div className="hint">Hint: {selectedWordObj.hint}</div>
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWordObj.word}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default Home;