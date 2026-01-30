import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
export const unsplashApi = createApi({
    reducerPath: "unsplashApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.unsplash.com/",
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Client-ID ${API_KEY}`);
            return headers;
        }
    }),
    endpoints: (build) => ({
        getPictures: build.query({
            query: () => "photos",
        }),
        getSearchPictures: build.query({
            query: (name) => `search/photos?query=${name}`,
        })
    }),
});

export const { useGetSearchPicturesQuery } = unsplashApi;
