import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 0
}

// const handleAsyncAction = createAsyncThunk({
//     "count/handleAsync" ,
//     async () => {

//     } 
// })

const counterSlice = createSlice({
    name : "counter" ,
    initialState : initialState ,
    reducers : {

        add : (state )=>{
            state.count += 1
        } ,
        minus : (state) => {
            state.count -= 1
        } ,
        addNumber : (state , action ) => {
            state.count = state.count + Number(action.payload)
        }

    },
})

const reducer  = counterSlice.reducer

export const { add , minus , addNumber } = counterSlice.actions

export default reducer