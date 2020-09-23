import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const DELETE_PRODUCT = 'DELETE_PRODUCT'


//ACTION CREATORS
const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id
})


//THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    const products = await axios.get('/api/products')
    dispatch(getProducts(products.data))
  }
}

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/products/${id}`)
      if (response.status === 204) {
        dispatch(deleteProduct(id))
      }
    }
    catch (err) {
      console.log(err)
    }
  }
}

//INITIAL STATE
/* const initialState = {
  products: []
} */

//REDUCERS
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      state = action.products;
      return state;
    case DELETE_PRODUCT:
      const newState = state.products.filter(product => product.id !== action.id)
      return newState
    default:
      return state
  }
}

const reducer = combineReducers({
  products: productsReducer
  }
)


const store = createStore(reducer, applyMiddleware(thunk))

export default store
