import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingitem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingitem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
        existingitem.totalPrice -= existingitem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
