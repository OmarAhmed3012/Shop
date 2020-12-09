import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? localStorage.getItem('cartItems')
  : []

console.log(cartItemsFromStorage)

const initialState = {
  cartItems: cartItemsFromStorage,
}

const middlware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
)

export default store
