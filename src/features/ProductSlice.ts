import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    value: string[]
}

const initialState: ProductState = {
    value: []
}

export const ProductSlice = createSlice({
    name: "productsReducer",
    initialState,
    reducers: {
        AddProductToCart: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        }
    }
})

export const { AddProductToCart } = ProductSlice.actions
export const { removeReservation } = ProductSlice.actions

export default ProductSlice.reducer

