import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store'
import { Link } from 'react-router-dom'


class ProductsList extends Component {
  async componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
     const {products} = this.props
    return (
      <div>
        <h1>Products Used by Your Friends</h1>
        <ul>
          { products.map(product => {
            return (
            <li key={product.id} className="product-list">
              <Link to={`/products/${product.id}`} >{product.name}</Link>
            </li>
            )
          })
        }
        </ul>
        <Link to='/add'>Add a Recommendation</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const products = state.products
  return {
    products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
