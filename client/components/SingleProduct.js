import React from 'react'
import { connect } from 'react-redux'
import {removeProduct} from '../store'

const SingleProduct = (props) => {
  const { product, removeProduct } =  props
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Product type: {product.productType}</p>
      <p>About this product: {product.description}</p>
      <p>Application: {product.appliedAt}</p>
      <button onClick={()=>removeProduct(product.id)}>Remove Recommendation</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(elem => elem.id === ownProps.match.params.id * 1)
  return {
    product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
