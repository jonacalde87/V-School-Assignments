import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import productData from './productData'

export default function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productData.find(product => product.id === productId)
    // console.log(thisProduct)

    const navigate = useNavigate()
    function handleClick() {
        return navigate(-1)
    }
    
  return (
    <div style={{textAlign: "center"}}>
        <h1>{thisProduct.name}</h1>
        <p>Price: ${thisProduct.price}</p>
        <p>{thisProduct.description}</p>    
        <button onClick={handleClick}>Go back to all products</button>
    </div>
  )
}
