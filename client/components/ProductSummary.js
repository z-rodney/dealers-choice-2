import React from 'react'
import { Link } from 'react-router-dom'

const ProductSummary = (props) => {
  const { product } = props
  return (
    <div>
      <h4>{product.name}</h4>
      <p>Product type: {product.productType}</p>
      <p>About this product: {product.description}</p>
      <p>Application: {product.appliedAt}</p>
      <Link to={`/products/${product.id}`}>Edit Recommendation</Link>
    </div>
  )
}

export default ProductSummary


