import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import checkoutReducer from "./checkoutSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);
const persistedCheckoutReducer = persistReducer(persistConfig, checkoutReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
    checkout: persistedCheckoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
