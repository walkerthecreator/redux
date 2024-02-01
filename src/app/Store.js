import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../reducers/sidebar";
import recommend  from "../reducers/recommend";

const Store = configureStore({
    reducer : {
        sidebar : sidebar ,
        recommend : recommend
    }
})

export default Store