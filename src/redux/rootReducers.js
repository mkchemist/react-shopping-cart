import { combineReducers } from "redux";
import cartReducers from "./reducers/cart-reducers";

export default combineReducers({
  cart: cartReducers
});
