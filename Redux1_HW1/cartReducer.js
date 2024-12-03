import { ADD_TO_CART,REMOVE_FROM_CART,CALCULATE_TOTAL } from "./actions";
const initialState = {
  cartItems: [],
  total: 0,
};

// cart Reducer

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exisitingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exisitingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case CALCULATE_TOTAL:
      const total = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, total };

    default:
      return state;
  }
};
export default cartReducer
