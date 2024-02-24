import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div className='container'>
      <div className='app'>
          <h1>GET THINGS DONE!</h1>
          <Link className='link' to='/day'>My Day </Link>
          <Link className='link' to='/work'>Work</Link>
          <Link className='link' to='/shopping'>Shopping</Link>
          <Link className='link' to='/family'>Family</Link>
          <Link className='link' to='/wishlist'>Wishlist</Link>
      </div>
    </div>
    
  )
}

export default App
