import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../utils/axios'
import { ArrowThroughHeart } from 'react-bootstrap-icons'

import formatCurrency from '../utils/formatCurrency'


const initialState = {
    products: [],
    quantity:0,
    total: 0
}


const getTotal = (info) => info.reduce((sum, { price, quantity, discount }) => sum + price * quantity - discount,0)

export const resetCart = createAsyncThunk("cart/reset", async ({cid, id, file}, thunkApi) => { 
  const res = await axios.put(`/carts/update/${cid}/${id}`,
      { ...file, quantity: 1, update: false })
      return res.data
} )
export const addToCart = createAsyncThunk("cart/add", async ({info, cartId}, thunkApi) => { 
  const res = await axios.post(`/carts/create/${cartId}`, info)
     if (cartId) return;
      localStorage.setItem("cartId", res.data.dbCart._id);
      
} )

const incrementCheck = (state, action) => {
   return state.products.map(each =>{ 
 if(each._id === action.payload.id){
        each.quantity += 1;

        if (each.quantity === 1) {
          each.update = false;
        }
        if (each.quantity >= each.stock) {
          each.inStock = false;
          each.quantity = each.stock;
        }
        if (each.quantity < each.stock && each.quantity > 0) {
          each.inStock = true;
        }
         if(!action.payload.single){
        each.update = true

      }
       
    }
    return each
    
  })
}
const decrementCheck = (state, action) => {
  return state.products.map(each =>{
      if(each._id === action.payload.id){
        
       each.quantity -= 1;
      
      if (each.quantity >  each.stock) {
        each.inStock = false;
        each.quantity = each.stock - 1;
      }
      if (each.quantity < each.stock && each.quantity > 0) {
        each.inStock = true;
      }
      if(!action.payload.single && each.quantity === 1 ){
        each.update = false;
        
      }
      each.update = true
    }
    return each
    })
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
       removeCart: (state, action) => {  
       state.products = state.products.filter(each => each._id !== action.payload)
       state.total = getTotal(state.products)
       state.quantity -= 1
      
    
},
getCart: (state, action) => {
    state.products = action.payload.data
    state.total = getTotal(state.products)
    state.quantity = state.products.length
},
    
 increment: (state, action) => {
    
const item = incrementCheck(state, action) 
  state.products = item
  state.total = getTotal(state.products)
},

 decrement: (state, action) => {
    
    const item = decrementCheck(state, action)
   state.products = item
   state.total = getTotal(state.products)
          
}, 
clearCart: (state) => {
    state.products.map((each) => {
      if (each.inCart) {
        each.inCart = false;
        each.update = false;
      }
    })
     state.products = []
     state.total = 0
     state.quantity = 0

    
  
}
},

extraReducers: (builder) => {
  builder.addCase(resetCart.fulfilled, (state, action) => {
     state.products = action.meta.arg.maped
     state.total = getTotal(state.products)
     state.quantity = state.products.length
  }),
  builder.addCase(addToCart.fulfilled, (state, action) => {
    
             
            state.products.push({...action.meta.arg.info, inCart: true})
            state.quantity += action.meta.arg.quantity
            state.total += getTotal(state.products)
  
  })
}
})


export const { removeCart, getCart, decrement, increment, clearCart} = cartSlice.actions
export default cartSlice.reducer