import { createSlice } from "@reduxjs/toolkit";

 const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: "Sambrial",
    },
    reducers:{
        setCity: (state, action) => {
            state.city = action.payload;
        },
    },
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;