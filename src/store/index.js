import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

const store = configureStore({
  // reducers here
  reducer: {
    counter: counterSlice,
  },
});

export default store;
