import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counter";
import productReducer from "./feature/product/product";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;
