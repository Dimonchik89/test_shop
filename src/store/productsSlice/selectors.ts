import { IProductState } from "@/store/productsSlice/productsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

type BaseStateT = (state: RootState) => IProductState

const baseState: BaseStateT = state => state.productsReducer
export const products = createSelector(baseState, state => state.products)
export const loading = createSelector(baseState, state => state.loading)
export const error = createSelector(baseState, state => state.error)
export const currentPage = createSelector(baseState, state => state.currentPage)
export const filter = createSelector(baseState, state => state.filter)
export const actualProducts = createSelector(baseState, state => state.actualProducts)
export const findName = createSelector(baseState, state => state.findName)
export const allCategory = createSelector(baseState, state => state.allCategory)
export const showMenu = createSelector(baseState, state => state.showMenu)
export const allPages = createSelector(baseState, state => state.allPages)
