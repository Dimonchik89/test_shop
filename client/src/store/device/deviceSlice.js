import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/useHttp";

const initialState = {
    device: null,
    loading: false,
    error: false
}

export const fetchDevice = createAsyncThunk(
    "device/fetchDevice",
    (url) => {
        const {getRequest} = useHttp();
        return getRequest(url)
    }
)

const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        changeQuantity: (state) => {
            state.device = {...state.device, count: state?.device?.count - 1}
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDevice.pending, state => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchDevice.fulfilled, (state, action) => {
                state.loading = false;
                state.device = action.payload;
            })
            .addCase(fetchDevice.rejected, state => {
                state.loading = false;
                state.error = true
            })
    }
})

const {reducer, actions} = deviceSlice;
export const {changeQuantity} = actions;
export default reducer;