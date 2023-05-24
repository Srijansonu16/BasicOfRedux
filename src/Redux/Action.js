import { ADD_TO_CART } from "./../Constants/ActionTypes";

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};
export { addToCart };
