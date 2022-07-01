import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.cart;
export const cart = createSelector(baseState, state => state.cart);
export const open = createSelector(baseState, state => state.open);
export const logUp = createSelector(baseState, state => state.logUp);