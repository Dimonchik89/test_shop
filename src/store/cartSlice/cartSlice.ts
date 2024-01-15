import { ICart, IProduct } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartSlice {
    cart: ICart[]
}

const initialState: ICartSlice = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: create => ({
        addToCart: create.reducer((state, action: PayloadAction<IProduct>) => {
            const inCart = state.cart.find(item => item.id === action.payload.id)
            if (inCart) {
                state.cart = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        }),
        removeFromCart: create.reducer((state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }),
        increment: create.reducer(((state, action: PayloadAction<number>) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        })),
        decrement: create.reducer((state, action: PayloadAction<number>) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
        }),
        resetCart: create.reducer(state => {
            state.cart = []
        })
    })
})

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, increment, decrement, resetCart } = actions;
export default reducer;