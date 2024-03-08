import useHttp from "@/hooks/useHttp";
import { IProduct } from "@/types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
    products: IProduct[] | null,
    loading: Boolean,
    error: null | string,
    currentPage: Number,
    allCategory: String[],
    filter: String,
    actualProducts: IProduct[] | null,
    findName: String,
    showMenu: Boolean,
    allPages: number
}

const initialState: IProductState = {
    products: null,
    loading: false,
    error: null,
    currentPage: 1,
    filter: "all",
    allCategory: [],
    actualProducts: null,
    findName: "",
    showMenu: false,
    allPages: 0
}

export const fetchProducts = createAsyncThunk<IProduct[], string, { rejectValue: string }>("product/fetchProduct", async (url, { rejectWithValue }) => {
    try {
        const { getData } = useHttp()
        return await getData(url)
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
    }

})

export const fetchAllCategory = createAsyncThunk<String[], undefined, { rejectValue: string }>('product/fetchAllCategory', async (_, { rejectWithValue }) => {
    try {
        const { getData } = useHttp()
        return await getData('products/categories')
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
    }
})

const productSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        changeFindName: (state, action: PayloadAction<string>) => {
            state.findName = action.payload;
            if (state.filter === "all" && !state.findName) {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage) || [];
                state.allPages = Math.ceil(state?.actualProducts.length / 6) //
            } else if (state.filter === "all" && !!state.findName) {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage)?.filter(item => item.title.toLowerCase().includes(state.findName.toLowerCase())) || [];
                state.allPages = Math.ceil(state?.actualProducts.length / 6)  //
            } else if (state.filter !== "all" && !!state.findName) {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage)?.filter(item => item.category === state.filter)?.filter(item => item.title.toLowerCase().includes(state.findName.toLowerCase())) || [];
                state.allPages = Math.ceil(state?.actualProducts.length / 6)  //
            } else {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage)?.filter(item => item.category === state.filter) || [];
                state.allPages = Math.ceil(state?.actualProducts.length / 6)  // 
            }

        },
        resetFindName: state => {
            state.findName = "";
            if (state.filter === "all") {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage) || [];
                state.allPages = Math.ceil(state?.products.length / 6)
            } else {
                state.actualProducts = state.products?.slice(6 * (+state.currentPage - 1), 6 * +state.currentPage)?.filter(item => item.category === state.filter) || [];
                state.allPages = Math.ceil(state?.actualProducts.length / 6)
            }

        },
        changeFilter: (state, action: PayloadAction<String>) => {
            state.filter = action.payload;
        },
        changeShowMenu: state => {
            state.showMenu = !state.showMenu
        },
        handlePagination: (state, action: PayloadAction<number>) => {
            state.actualProducts = state.products?.slice(6 * (action.payload - 1), 6 * action.payload) || null;
        },
        changeCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.actualProducts = action.payload.slice(0, 6);
                state.allPages = Math.ceil(action.payload?.length / 6)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchAllCategory.fulfilled, (state, action) => {
                state.allCategory = action.payload;
            })
            .addCase(fetchAllCategory.rejected, (state, action) => {
                state.error = action.payload as string;
            })
    }
})

const { actions, reducer } = productSlice;

export const { changeFindName, resetFindName, changeFilter, changeShowMenu, handlePagination, changeCurrentPage } = actions;
export default reducer;