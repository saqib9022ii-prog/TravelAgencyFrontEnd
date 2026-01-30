import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieName: "Movies",
    },
    reducers:{
        setMovieName: (state,action) => {
            state.movieName = action.payload;
        }
    }
});

export const { setMovieName } = movieSlice.actions;
export default movieSlice.reducer;