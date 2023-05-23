import React from 'react'
import img1 from "../assets/ecouter.png"
import "./Show.css"
import { List } from 'antd'
import data from "./data"


function Show({cart,cartId}) {
  const products =data.products;

  const product = products.find(product => product.id === cartId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
}
export default Show