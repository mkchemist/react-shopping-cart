import { GET_ALL_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/action-types";

const defaultState = [];
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_CART:
      return action.payload;
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_FROM_CART :
      return action.payload
    default:
      return state;
  }
}
