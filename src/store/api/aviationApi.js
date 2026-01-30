import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_AVIATION_API_KEY;
export const aviationApi = createApi({
    reducerPath:"aviationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.aviationstack.com/v1/",
    }),
    endpoints: (build) => ({
        getFlights: build.query({
            query: ({ flight_status = "active"}) => `flights?access_key=${API_KEY}`,
        }),
        getAirports: build.query({
            query: ({iata}) => `airports?access_key=${API_KEY}`,
        })
    }),
});

export const { useGetFlightsQuery, useGetAirportsQuery } = aviationApi;