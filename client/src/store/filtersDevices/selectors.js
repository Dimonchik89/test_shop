import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.filtersDevices;
export const filtersDevices = createSelector(baseState, state => state.filtersDevices);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);