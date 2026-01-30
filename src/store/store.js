import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api/weatherApi";
import { myApi } from "./api/myApi";
import { movieApi } from "./api/movieApi";
import { aviationApi } from "./api/aviationApi";
import { unsplashApi } from "./api/unsplashapi";
import weatherReducer from "./slices/weatherSlice";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import splashReducer from "./slices/unsplashSlice";
import taskReducer from "./slices/todoSlice";
import productReducer from "./slices/productSlice";


export const store = configureStore({
    reducer:{
        weather: weatherReducer,
        user: userReducer,
        movie: movieReducer,
        picture: splashReducer,
        todo: taskReducer,
        product: productReducer,


        [myApi.reducerPath] : myApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [aviationApi.reducerPath]: aviationApi.reducer,
        [unsplashApi.reducerPath]: unsplashApi.reducer,
    },
    middleware: (gDM) => gDM().concat(myApi.middleware,weatherApi.middleware, movieApi.middleware,
        aviationApi.middleware,unsplashApi.middleware
    ),

});