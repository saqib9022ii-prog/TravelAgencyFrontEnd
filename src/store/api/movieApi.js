import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/",
    }),
    endpoints: (build) => ({
        getPoster: build.query({
            query: (movie, page=42) => `search/movie?query=${movie}&api_key=${API_KEY}&page=${page}`,
        }),
    }),
});

export const { useGetPosterQuery } = movieApi;