import productReducer from "./product/reducer/productReducer";
import { combineReducers } from "redux";

export  const rootReducer = combineReducers({
  productReducer,
});
