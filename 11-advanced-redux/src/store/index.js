import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice},
});

export default store;
