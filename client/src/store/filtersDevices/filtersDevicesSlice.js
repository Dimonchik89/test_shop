import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";

const initialState = {
    filtersDevices: [],
    loading: false,
    error: false
}

export const fetchFiltersDevices = createAsyncThunk(
    "filtersDevices/fetchFiltersDevices",
    (url) => {
        const {getRequest} = useHttp();
        return getRequest(url)
    }
)

const feltersDevicesSlice = createSlice({
    name: "filtersDevices",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFiltersDevices.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchFiltersDevices.fulfilled, (state, action) => {
                state.loading = false;
                state.filtersDevices = action.payload.rows;
            })
            .addCase(fetchFiltersDevices.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})

const {reducer} = feltersDevicesSlice;
export default reducer;