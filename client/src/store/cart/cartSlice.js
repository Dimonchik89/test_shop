import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    open: false,
    logUp: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGood: (state, action) => {
            state.cart = action.payload
        },
        removeGood: (state, action) => {
            state.cart = state.cart.filter(device => device.id !== action.payload)
        },
        openCart: (state) => {
            state.open = true;
        },
        closeCart: (state) => {
            state.open = false;
        },
        openLogUp: (state) => {
            state.logUp = true;
        },
        closeLogUp: (state) => {
            state.logUp = false
        }

    }
})

const { reducer, actions } = cartSlice;
export const { addGood, removeGood, openCart, closeCart, openLogUp, closeLogUp } = actions;
export default reducer;