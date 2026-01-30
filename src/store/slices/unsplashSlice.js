import { createSlice } from "@reduxjs/toolkit";

const unsplashSlice = createSlice({
    name:"picture",
    initialState:{
        image: "Nature",
    },
    reducers:{
        setName: (state,action) => {
            state.image = action.payload;
        },
    },
});

export const { setName } = unsplashSlice.actions;
export default unsplashSlice.reducer;