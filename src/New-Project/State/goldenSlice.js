import {  createSlice } from "@reduxjs/toolkit";
import formatCurrency from "../utils/formatCurrency";




const initialState = {
    products: [],
     
    orders: {},
    searchItem: [],
    modal: false,
    search: false,
    modalData: {},
    
}



 export const sumDatas = {
   sumTotal : () => {
         return  formatCurrency(initialState.cart.reduce((sum, { price, quantity, discount }) => sum + price * quantity - discount,0
     ))},

     sumSingle:() => {
    
    initialState.cart.map(each =>{
         if(each._id === action._id){
             return formatCurrency(each.price * each.quantity)
         }
     })
   
  }}

const goldenSlice = createSlice({
    name: "golden",
    initialState,
    
    reducers: {
      
        getProducts: (state, action) => {
           state.products = action.payload
        },
        getFilteredProducts: (state, action) => {
           state.products = [...state.products, action.payload]
        },
        
       
     getSearchItems: (state, action) => {
        state.searchItem = state.products.filter((each) => each.name.toLowerCase().includes(action.payload.toLowerCase()))
     },
        getOrders: (state, action) => {
           console.log(action)
           state.orders = action.payload
        },
        openModal: (state) => {state.modal = !state.modal},
        openSearch: (state, action) => {
            state.search = action.payload
        },

getModalFile: (state, action) => {
   state.modalData = state.products.find((item) => item._id === action.payload)
}
}
})
        
        

export const { getOrders, getProducts,
    openModal,getModalFile, openSearch, 
     getSearchItems, getFilteredProducts} = goldenSlice.actions
export default goldenSlice.reducer