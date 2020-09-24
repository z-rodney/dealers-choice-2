import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../store'
import { Link } from 'react-router-dom'

class EditProduct extends Component {
  constructor() {
    super()
    
  }
  componentDidMount() {
   if (!this.props.product) {
      this.props.product = {}
    }
  }

  componentDidUpdate() {
      /* if (!this.props.product) {
      this.props.product = {}
    } */
  }

  render() {
    const { product, removeProduct } =  this.props
      if (product) {
        return (
          <div>
            <h3>{product.name}</h3>
            <p>Product type: {product.productType}</p>
            <p>About this product: {product.description}</p>
            <p>Application: {product.appliedAt}</p>

            <button onClick={() => removeProduct(product.id)}>Remove Recommendation</button>
            <button>Save</button>
          </div>

        )
      } else {
        return (
          <div>
            <h3>Loading...</h3>
          </div>
        )
      }

  }
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
