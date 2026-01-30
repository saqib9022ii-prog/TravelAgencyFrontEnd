import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.weatherapi.com/v1/",
    }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (city) => `current.json?key=${API_KEY}&q=${city}`,
        }),
    }),
});

export const {useGetWeatherQuery} = weatherApi;