import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createProduct, removeProduct, editProduct } from '../store'

class AddEditProduct extends Component {
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
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    if (this.props.product) {
      this.setState({...this.props.product})
    }
  }

  componentDidUpdate() {

  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  handleSave(event) {
    event.preventDefault()
    const product = { ...this.state }
    this.props.product ? this.props.editProduct(product) : this.props.createProduct(product)
    this.props.history.push('/products')
  }

  handleDelete(id) {
    this.props.removeProduct(id)
    this.props.history.push('/products')
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
          <button onClick={this.handleSave}>Save</button>
          { this.props.product ? <button onClick={() => this.handleDelete(this.props.product.id)}>Delete</button> : null}
        </form>

        <Link to='products'>Back</Link>
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
    createProduct: (product) => dispatch(createProduct(product)),
    editProduct: (product) => dispatch(editProduct(product)),
    removeProduct: (id) => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditProduct)
