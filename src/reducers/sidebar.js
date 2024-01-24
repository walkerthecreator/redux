import { createSlice } from "@reduxjs/toolkit";

const init = {
    isOpen : true
}

const sidebarSlice = createSlice({
    name : "sidebar" ,
    initialState : init, 
    reducers : {
        toggleSidebar(state , action ){
            state.isOpen = ! state.isOpen
        }
    }
})

export const { toggleSidebar  } = sidebarSlice.actions
export default sidebarSlice.reducer

export const sidebarSelector = (state) => state.isOpen 