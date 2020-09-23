import React, { Component } from 'react'

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
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <h3>Drop Your Recommendation</h3>
        <form>
          <label>Name: <input name='name' onChange={this.handleChange}/> </label>

          <label>Description: <input name='description' onChange={this.handleChange} /> </label>

          <label>
            Product Type:
            <select name='productType' onChange={this.handleChange}>
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
            <select name='appliedAt' onChange={this.handleChange}>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
              <option value='AM/PM'>AM/PM</option>
            </select>
          </label>

          <label>
            Skin Type:
            <select name='skinType' onChange={this.handleChange}>
              <option value='Oily'>Oily</option>
              <option value='Dry'>Dry</option>
              <option value='Combo'>Combo</option>
              <option value='All'>All</option>
            </select>
          </label>

          <label>Image URL: <input name='imageUrl' onChange={this.handleChange}/> </label>
        </form>
      </div>
    )
  }
}

export default AddProduct