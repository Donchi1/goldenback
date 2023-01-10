import {configureStore} from "@reduxjs/toolkit"
import adminSlice from "./adminSlice"
import authSlice from "./authSlice"
import goldenSlice from "./goldenSlice"
import cartSlice from "./cartSlice"



const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth:authSlice,
        golden: goldenSlice,
        admin: adminSlice
    }
})

export default store