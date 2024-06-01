import React from 'react'

const Header = () => {
  return (
    <>
      <h2 style={{marginTop: '30px'}}>FE Hangman</h2>
      <h3 style={{position: 'relative', color: 'green', fontStyle: 'bold', fontSize: '25px'}}>Level: Beginner</h3>
      <p>To find the hidden word - Enter a letter</p>
    </>
  )
}

export default Header
