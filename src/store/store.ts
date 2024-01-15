import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/productsSlice";
import oneProductReducer from "./oneProductSlice/oneProductSlice"
import cartReducer from "./cartSlice/cartSlice"

const store = configureStore({
    reducer: {
        productsReducer,
        oneProductReducer,
        cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV === "development" ? true : false
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;