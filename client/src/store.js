import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from "js-cookie";
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';

//const cartItems = Cookie.getJSON(cartItems) || [];
//const initialState = {cart: {cartItems}};  esto pertence a las cookies, esta comentado porque no esta implementado completamente, y si lo dejo crashea

const initialState = {};    
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE___ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));   
export default store;