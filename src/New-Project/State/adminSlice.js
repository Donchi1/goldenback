import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    admin: {},
    openSidebar: false,
    dark: false
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        makeSliderOpen:(state ) => {state.openSidebar = !state.openSidebar},  
        getAdminUser : (state, action) => {state.admin = action.payload},
        changeTheme :(state, action) => {state.dark = action.payload}
    }
})

export const {getAdminUser, makeSliderOpen, changeTheme} = adminSlice.actions
export default adminSlice.reducer