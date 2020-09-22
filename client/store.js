import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'

//ACTION CREATORS
const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})

//THUNK CREATORS
export const fetchProducts = () => {
  return async (dispatch) => {
    const products = await axios.get('/api/products')
    dispatch(getProducts(products.data))
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
