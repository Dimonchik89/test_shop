import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";

const initialState = {
    devices: [],
    loading: false,
    error: false,
    countDevices: 1
}

export const fetchDevices = createAsyncThunk(
    "devices/fetchDevices",
    (url) => {
        const {getRequest} = useHttp();
        return getRequest(url);
    }
)

const devicesSlice = createSlice({
    name: "devices",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDevices.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchDevices.fulfilled, (state, action) => {
                state.loading = false;
                state.devices.push(...action.payload.rows);
                state.countDevices = action.payload.count
            })
            .addCase(fetchDevices.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})

const { reducer } = devicesSlice;
export default reducer;
