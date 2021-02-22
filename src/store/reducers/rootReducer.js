import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { beerReducer } from "./beerReducer";

export const rootReducer = combineReducers({
  cartReducer,
  beerReducer,
});
