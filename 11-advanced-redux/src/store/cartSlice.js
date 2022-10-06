import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { totalAmount: 0, items: [], changed: false },
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
    addItemCart(state, actions) {
      state.totalAmount++;
      state.changed = true;
      
      const newItem = actions.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.totalPrice += newItem.price;
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {    
      state.changed = true;
      state.totalAmount--;

      const id = action.payload.id;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
