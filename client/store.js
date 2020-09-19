import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//ACTION TYPES

//ACTION CREATORS

//THUNK CREATORS

//INITIAL STATE
const initialState = {}

//REDUCERS
const reducer = (state = initialState, action) => {
  return state
}


const store = createStore(reducer)

export default store
