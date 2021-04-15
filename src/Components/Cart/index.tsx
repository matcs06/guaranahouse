
import React from 'react';
import {useContext} from "react"
import {AppContext} from "../../context/AppContext"
import styles from "./Cart.module.css"
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-fa-solid/shopping-cart';



const Cart = () => {

  const [shared, , ,  ] = useContext(AppContext)

  let quantity = 0
  quantity = shared.items.length

  if(quantity > 0){
    return(
       <div className={styles.container}>
          <div className={styles.quantity}>
             {quantity}
          </div>
          <Icon className={styles.cartcontainer} icon={shoppingCart} style={{ color: "#54B0F3", fontSize: '35px'}} />
       </div>
    )
  }else{
      return(
          <></>
      )
  }  
 
    
      
}

export default Cart;