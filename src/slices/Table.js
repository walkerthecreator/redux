import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const init = {
    tableView : null 
}


const tableSlice = createSlice({
    name : "table" ,
    initialState : init ,
    reducers : {
        addToView : (state , action ) => {
            state.tableView = action.payload
        }
    }
})

export const { addToView } = tableSlice.actions


export default tableSlice.reducer




// store : {
//     reducer : {
//         table  : { tableView }
//         product : { loading , product }
//     }
// }


