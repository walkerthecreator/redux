import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../reducers/sidebar";

const Store = configureStore({
    reducer : sidebar
})

export default Store