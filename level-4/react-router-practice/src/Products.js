import React from 'react'
import { Link } from "react-router-dom"
import productData from './productData'
/**
 * Challenge:
 * 
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product 
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 * 
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */
export default function Products() {
    const products = productData.map(product =>
        <div key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
                <p>Price: ${product.price}</p>
                <hr />
        </div>
    )
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Product Page</h1>
            ---------------------
            {products}
            <Link to="/">Go back to Main Page</Link>
        </div>
    )
}
