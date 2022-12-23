import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, loginReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allUsers: loginReducer,
});
export default reducers;

