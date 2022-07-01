import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";

const initialState = {
    filters: [],
    loading: false,
    error: false
}

export const fetchFilter = createAsyncThunk(
    "filter/fetchFilter",
    () => {
        const {getRequest} = useHttp();
        return getRequest("?limit=61");
    }
)

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFilter.pending, state => {
                state.loading = true;
                state.error = false
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.loading = false;
                state.filters = [...new Set(action.payload.rows.map(item => item.category))]
            })
            .addCase(fetchFilter.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    }
})

const { reducer } = filterSlice;
export default reducer;
