import { addToCart } from "./Action";

const initialState = [];

const Reducer = (state = [initialState], action) => {
  switch (action.type) {
    case addToCart: {
      return [...state, { ...action.payload, quantity: 1 }];
    }
    default:
      return state;
  }
};
export default Reducer;
