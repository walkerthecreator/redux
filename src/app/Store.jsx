import { configureStore } from "@reduxjs/toolkit" 
// import countReducer from "../slices/Counter"
import tableReducer from "../slices/Table"
import productReducer from "../slices/Product"

const Store = configureStore({
    // reducer : countReducer
    reducer : {
        "table" : tableReducer ,
        "product" : productReducer
    }
})

export default Store