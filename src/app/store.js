import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // prepend and concat calls can be chained
      .concat(logger),
});

export default store;
