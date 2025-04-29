// cartReducer.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_CART,
  CLEAR_CART,
} from "./cartActionTypes"; // 🔧 Import chuẩn từ file action types

export const initialCartState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const exist = state.find(item => item.id === action.payload.id);
      if (exist) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: action.payload.quantity }];
      }
    }

    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);

    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case DECREASE_QUANTITY:
      return state
        .map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0);

    case SET_CART:
      return action.payload;

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};
