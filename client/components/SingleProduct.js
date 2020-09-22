import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleProduct extends Component {
  componentDidMount() {
    //console.log(this.props)
    this.props.product = this.props.products.find(elem => elem.id === this.props.match.params.id * 1)
    console.log(this.props.product)
    //console.log(this.props.setProduct(product))
  }

  render() {
    //const {product} = this.props
    return (
      //<h3>{this.props.product.name}</h3>
      //<p>{this.props}</p>
    )
  }
}

const mapStateToProps = (state) => {
  const { products } = state
  return {
    products
  }
}

export default connect(mapStateToProps)(SingleProduct)
