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
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Show