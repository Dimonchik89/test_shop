import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.filter;
export const filters = createSelector(baseState, state => state.filters);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);