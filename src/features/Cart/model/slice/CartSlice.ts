import { createSlice } from '@reduxjs/toolkit';
import { CartSchema } from '../types/CartSchema';

const initialState: CartSchema = {
    totalPrice: 0,
    totalQuantity: 0,
    isCartOpen: false,
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.totalQuantity += 1;
            state.isCartOpen = true;
        },
    }
});

// Action creators are generated for each case reducer function
export const { increment} = CartSlice.actions
export const { CartReducer } = CartSlice.reducer
