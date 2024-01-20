import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const init = {
    product : null ,
    loading : false 
}

export const fetchProducts = createAsyncThunk(
    "product/fetchProduct" ,
    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data 
    }
)

const productSlice = createSlice({
    name : "product" ,
    initialState : init ,
    reducers : {
        
    }    ,
    extraReducers : (builder) => {
        builder
        .addCase(fetchProducts.pending , (state , action) => {
            state.loading = true
        })
        .addCase(fetchProducts.rejected , (state , action ) => {
            console.log('something went wrong')
            state.loading = false
        })
        .addCase(fetchProducts.fulfilled , (state , action ) => {
            state.loading = false
            state.product = action.payload
        })
    }
})

export default productSlice.reducer