import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.devices;
export const devices = createSelector(baseState, state => state.devices);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);
export const countDevices = createSelector(baseState, state => state.countDevices);