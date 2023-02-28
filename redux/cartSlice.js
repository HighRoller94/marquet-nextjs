import { createSlice } from '@reduxjs/toolkit'
import { MdSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const item = state.products.find((product) => product.title === action.payload.title);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }

            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.title !== action.payload.title)
            state.quantity -= action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
        },
        addCheckoutProduct: (state, action) => {
            const item = state.products.find((product) => product.title === action.payload.title);
            if (item) {
                item.quantity = action.payload.quantity+1
            } else {
                state.products.push(action.payload);
            }
            state.quantity = state.quantity+1
            state.total = state.total + (action.payload.price * 1);
        },
        removeCheckoutProduct: (state, action) => {
            const item = state.products.find((product) => product.title === action.payload.title);
            if (item.quantity >= 2) {
                item.quantity = action.payload.quantity-1
                state.quantity = state.quantity-1
                state.total = state.total - (action.payload.price * 1);
            } 

        },
        reset:(state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    },
})

export const { removeCheckoutProduct, addCheckoutProduct, removeProduct, addProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;