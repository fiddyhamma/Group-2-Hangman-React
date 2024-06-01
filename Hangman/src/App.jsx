import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import { showNotification as show } from './Helpers/Helpers';
import './App.css';

const words = ['html', 'programming', 'css', 'style', 'form', 'mediaquery', 'tables', 'padding', 'margin', 'flexbox', 'class', 'id', 'iframes', 'semantics', 'selectors', 'boxmodel', 'opacity', 'specificity', 'color', 'comments'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setshowNotification] = useState(false);
  

  const handleLetterChange = (letter) => {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setcorrectLetters([...correctLetters, letter]);
      } else {
        show(setshowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setwrongLetters([...wrongLetters, letter]);
      } else {
        show(setshowNotification);
      }
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        handleLetterChange(letter);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);


  function playAgain() {
    setPlayable(true);

    //Empty Arrays
    setcorrectLetters([]);
    setwrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} onLetterChange={handleLetterChange} />
      </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

