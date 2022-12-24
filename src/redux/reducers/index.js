import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, loginReducer, AdminloginReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allUsers: loginReducer,
  allAdminUsers: AdminloginReducer,
});
export default reducers;

