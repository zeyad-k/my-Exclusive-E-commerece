import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    calculateTotalPrice: (state, action) => {
      const items = action.payload;
      const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      state.totalPrice = total;
    },
  },
});

export const { calculateTotalPrice } = checkoutSlice.actions;

export default  checkoutSlice.reducer

