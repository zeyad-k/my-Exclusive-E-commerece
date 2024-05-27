import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem: addToWishlist, removeItem: removeFromWishlist,removeAllItems:removeAllFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
