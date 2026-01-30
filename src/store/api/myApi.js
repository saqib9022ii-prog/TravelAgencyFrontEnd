import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/",
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (username) => `users/${username}`,
        }),
    }),
});

export const { useGetUserQuery } = myApi;