import React from 'react'
import { connect } from 'react-redux'

const SingleProduct = (props) => {
  const { product } =  props
  return (
    <div className='single-product'>
      <h3>{product.name}</h3>
      <p>Product type: {product.productType}</p>
      <p>About this product: {product.description}</p>
      <p>Application: {product.appliedAt}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(elem => elem.id === ownProps.match.params.id * 1)
  return {
    product
  }
}

export default connect(mapStateToProps)(SingleProduct)
