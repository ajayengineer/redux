import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  users: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }

    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null
      }

    default:
      return state;
  }
};
