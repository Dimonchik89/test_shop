import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICartSlice } from ".";

type BaseStateT = (state: RootState) => ICartSlice

const baseState: BaseStateT = state => state.cartReducer;
export const cart = createSelector(baseState, state => state.cart)