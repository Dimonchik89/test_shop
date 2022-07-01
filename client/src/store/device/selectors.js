import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.device;
export const device = createSelector(baseState, state => state.device);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);