import useHttp from "@/hooks/useHttp";
import { IProduct } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IOneProductState {
    product: IProduct | null,
    loading: Boolean,
    error: String | null
}

const initialState: IOneProductState = {
    product: null,
    loading: false,
    error: null
}

export const fetchOneProduct = createAsyncThunk<IProduct, string, { rejectValue: string }>(
    'oneProduct/fetchOneProduct',
    async (url, { rejectWithValue }) => {
        try {
            const { getData } = useHttp()
            return await getData(url)
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
        }
    }
)

const oneProductSlice = createSlice({
    name: "oneProduct",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOneProduct.pending, state => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchOneProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchOneProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string
            })
    }
})

const { actions, reducer } = oneProductSlice

export default reducer;