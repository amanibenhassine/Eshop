import React from 'react'
import img1 from "../assets/ecouter.png"
import "./Show.css"
import { List } from 'antd'
import data from "./data"
import { useCart } from 'react-use-cart';



function Show() {
  const { cartTotal, totalUniqueItems, items } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <p>Total Items: {totalUniqueItems}</p>
      <p>Total Price: ${cartTotal}</p>
      <table>
        {items.map(item => (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.title}/>
           </td> 
           <td>{item.title}</td> 
            <td>${item.price}</td> 
            <td>Quantity: {item.quantity}</td> 
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Show