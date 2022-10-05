import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'

function ShoppingCart() {
  const {cart,deleteCart} = useContext(AppContext);

  if(cart.length===0){
    return <h1>Your Shopping Cart is Empty</h1>
  }
  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>  
        {cart && cart.map((el)=>(
          
            <div key ={el.id}>
              <img src={el.image} alt="shopping cart" />
              <h1>{el.name}</h1>
              <h3>Price : {el.price}</h3>
              <button onClick={()=>deleteCart(el.id)}>Delete</button>
            </div>
        ))}

        </div>
    </div>
  )
}

export default ShoppingCart
