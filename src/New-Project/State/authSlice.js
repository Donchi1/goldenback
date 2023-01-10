import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user: {},

}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUser : (state, action) => {state.user = action.payload.data},
        logout: (state) => {state.user = {}}
        
    }
})

export const {getUser, logout} = authSlice.actions
export default authSlice.reducer
