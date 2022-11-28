import { combineReducers } from "@reduxjs/toolkit";

import { loginReducer } from "../features/loginSlice";
import { productReducer } from "../features/productSlice";

const rootReducer = combineReducers({
  signin: loginReducer,
  product: productReducer
});

export default rootReducer;