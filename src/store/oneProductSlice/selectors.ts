import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IOneProductState } from ".";

type BaseStateT = (state: RootState) => IOneProductState

const baseState: BaseStateT = (state) => state.oneProductReducer;

export const product = createSelector(baseState, state => state.product)
export const loading = createSelector(baseState, state => state.loading)
export const error = createSelector(baseState, state => state.error)