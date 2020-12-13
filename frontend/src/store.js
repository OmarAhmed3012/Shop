import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? localStorage.getItem('cartItems')
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? localStorage.getItem('userInfo')
  : null

console.log(cartItemsFromStorage)

const initialState = {
  cartItems: cartItemsFromStorage,
  userLogin: { userInfo: userInfoFromStorage },
}

const middlware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
)

export default store
