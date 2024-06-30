import React, { useEffect } from 'react';
import './HangmanHome.css';
const HangmanHome = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1B1B1B'; // Set your desired color

  // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);


  return (
    <>
      <div className="home-container" style={{backgroundColor: '#34495e', color: 'white'}}>
      <div className='heading-text' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <h1>Who Says Learning</h1>
      </div>
      <div>
        <h1>Can't Be</h1>
      </div>
      <div><h1 style={{color: '#1DCC1D'}}>Fun?</h1></div>
      </div>
      </div>
    </>
  );
};

export default HangmanHome;
