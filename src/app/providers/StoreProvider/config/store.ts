import { configureStore } from '@reduxjs/toolkit'
import { CartReducer } from "@/features/Cart/model/slice/CartSlice";
import {increment} from "@/features/Cart/model/slice/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    },
});
