import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct, removeProduct } from '../store'

class AddProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      productType: '',
      appliedAt: '',
      skinType: '',
      imageUrl: ''
    },
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    if (this.props.product) {
      this.setState({...this.props.product})
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  handleUpdate(event) {
    event.preventDefault()
    
  }

  handleSave(event) {
    event.preventDefault()
    const product = { ...this.state }
    this.props.createProduct(product)
  }

  render() {
    const { name, description, productType, appliedAt, skinType, imageUrl } = this.state
    return (
      <div>
        <h3>Drop Your Recommendation</h3>
        <form onSubmit={this.handleSave}>
          <label>Name: <input name='name' value={name} onChange={this.handleChange}/> </label>

          <label>Description: <input name='description' value={description} onChange={this.handleChange} /> </label>

          <label>
            Product Type:
            <select name='productType' value={productType} onChange={this.handleChange}>
              <option value=''></option>
              <option value='Cleanser'>Cleanser</option>
              <option value='Mask'>Mask</option>
              <option value='Moisturizer'>Moisturizer</option>
              <option value='Serum'>Serum</option>
              <option value='Sunscreen'>Sunscreen</option>
              <option value='Toner'>Toner</option>
              <option value='Multi-purpose'>Multi-purpose</option>
              <option value='Other'>Other</option>
            </select>
          </label>

          <label>
            Application:
            <select name='appliedAt' value={appliedAt} onChange={this.handleChange}>
              <option value=''></option>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
              <option value='AM/PM'>AM/PM</option>
            </select>
          </label>

          <label>
            Skin Type:
            <select name='skinType' value={skinType} onChange={this.handleChange}>
              <option value=''></option>
              <option value='Oily'>Oily</option>
              <option value='Dry'>Dry</option>
              <option value='Combo'>Combo</option>
              <option value='All'>All</option>
            </select>
          </label>

          <label>Image URL: <input name='imageUrl' value={imageUrl} onChange={this.handleChange} /> </label>

          {this.props.product ?
            <span>
              <button>Update</button> <button>Delete</button>
            </span>
            :
            <button>Create</button>
            }
        </form>
      </div>
    )
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
    createProduct: (product) => dispatch(createProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
