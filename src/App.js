import React,{useState} from 'react'
import './App.css'
import bdyCake from "./birthday-cake.jpg"
import bdyCakee from "./birthday-cakee.png"
import plussign from "./plus.png"
import minussign from "./minus.png"
import { type } from '@testing-library/user-event/dist/type'

function App() {

const [quantity , setQuantity] = useState (1);

const updateQuantity = (type) => {
if(type === "plus"){
  setQuantity(quantity+1);
}else if(type === "minus"  && quantity > 1){
  setQuantity(quantity-1)
}
}

  return (
    <div className='card'>
      <img src={bdyCakee} className='card-img'/>
      <h1 className='card-title'> CAKE</h1>
      <p className='card-description'>
      Cake is a sweet, baked dessert that comes in various flavors and textures, 
      typically made from flour, sugar, eggs, and  oil.</p>
      <p className='card-price'> PRICE ₹ 20</p>

      <div className='sing-container'>
        <img src={minussign} className='sign' alt="minus"
        onClick={()=>updateQuantity("minus")}/>

        <span className='couting'>{quantity}</span>

        <img src={plussign} className='sign' alt="plus"
        onClick={()=>updateQuantity ("plus")}/>
      </div>
      <button className='btn'>BUY NOW</button>
    </div>
  )
}


export default App