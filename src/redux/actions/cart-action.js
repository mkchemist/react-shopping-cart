import { GET_ALL_CART, ADD_TO_CART, REMOVE_FROM_CART } from "./action-types";
import { setItem, getItem, addToItem, removeFromItem } from "../../local-store";
setItem("cart", []);

export function getAllCart() {
  return {
    type: GET_ALL_CART,
    payload: getItem("cart")
  };
}

export function addToCart(payload) {
  addToItem("cart", payload);
  return {
    type: ADD_TO_CART,
    payload: getItem("cart")
  };
}

export function removeFromCart(payload) {
  removeFromItem("cart",payload);
  return {
    type: REMOVE_FROM_CART,
    payload : getItem("cart")
  }
}
