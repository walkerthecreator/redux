import { createSlice } from "@reduxjs/toolkit";

const init ={
    list : null ,
    loading : false
}

const recommendSlice = createSlice({
    name : "recommend" ,
    initialState : init ,
    reducers : {
        add : (state , action ) => {
            state.list = action.payload
            state.loading = false
        }
    }
})

export const { add } = recommendSlice.actions
export const selectRecommendList = (state) => state.recommend.list
export default recommendSlice.reducer