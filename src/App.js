import React from 'react'
import './App.css'
import bdyCake from "./birthday-cake.jpg"
import bdyCakee from "./birthday-cakee.png"

function App() {
  return (
    <div className='card'>
      <img src={bdyCakee} className='card-img'/>
      <h1 className='card-title'> CAKE</h1>
    </div>
  )
}

export default App