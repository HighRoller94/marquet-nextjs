import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import authReducer from './authSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    }
})