import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <>
    <div className='header'>
      <h2 style={{marginTop: '30px'}}>FE Hangman</h2>
      <div className= 'level'>
      <h3 style={{position: 'relative', color: 'white', fontStyle: 'bold', fontSize: '25px'}}>Level:</h3>
      <p className= 'beginner'style={{color: 'rgb(8, 216, 8)', fontStyle: 'bold', fontSize: '25px'}}> Beginner</p>
      </div>
      <p>To find the hidden word - Enter a letter</p>
      </div>
    </>
  )
}

export default Header
