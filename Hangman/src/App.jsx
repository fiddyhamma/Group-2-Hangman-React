import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import { showNotification as show } from './Helpers/Helpers';
import HangmanHome from './HangmanHome';
import Navbar from './components/Navbar';
import AboutUS from './components/AboutUS';
import './App.css';

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
  { word: 'comments', hint: 'Notes in code not executed' },
  { word: 'javascript', hint: 'Programming language for web development' },
  { word: 'bootstrap', hint: 'CSS framework for responsive design' },
  { word: 'variables', hint: 'Storage for data values in programming' },
  { word: 'arrays', hint: 'Data structure for storing multiple values' },
  { word: 'functions', hint: 'Reusable block of code for specific tasks' },
  { word: 'loops', hint: 'Control flow to repeat actions' },
  { word: 'git', hint: 'Version control system for tracking code changes' },
  { word: 'repository', hint: 'Storage location for software packages' },
  { word: 'commit', hint: 'Record of changes in version control' },
  { word: 'responsive', hint: 'Design that adapts to different screen sizes' },
  { word: 'api', hint: 'Set of functions for accessing data from a service' },
  { word: 'json', hint: 'Lightweight data interchange format' },
  { word: 'ajax', hint: 'Technique for updating web pages asynchronously' },
  { word: 'event', hint: 'Action or occurrence recognized by software' },
  { word: 'dom', hint: 'Object model representing HTML structure' },
  { word: 'node', hint: 'JavaScript runtime environment for server-side scripting' },
  { word: 'express', hint: 'Web application framework for Node.js' },
  { word: 'mongodb', hint: 'NoSQL database for scalable applications' },
  { word: 'react', hint: 'JavaScript library for building user interfaces' },
  { word: 'component', hint: 'Reusable UI element in React' },
  { word: 'state', hint: 'Internal data storage in React components' },
  { word: 'props', hint: 'Properties passed to React components' },
  { word: 'jsx', hint: 'Syntax extension for JavaScript used in React' }
];


const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setshowNotification] = useState(false);
  const [selectedWordObj, setSelectedWordObj] = useState(words[Math.floor(Math.random() * words.length)]);

  const handleLetterChange = (letter) => {
    if (selectedWordObj.word.includes(letter)) {
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

  const playAgain = () => {
    setPlayable(true);
    //Empty Arrays
    setcorrectLetters([]);
    setwrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    setSelectedWordObj(words[random]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HangmanHome />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/app" element={
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
        } />
      </Routes>
    </Router>
  );
};

export default App;
