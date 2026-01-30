import {createSlice, nanoid} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct:{
            reducer: (state,action) => {
                state.products.push(action.payload);
            },
            prepare: (product) => ({
                payload:{
                    id:nanoid(),
                    ...product
                }
            }),
        },
        removeProduct: (state,action) => {
            state.products = state.products.filter((p) => p.id !== action.payload);
        }
    }
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;