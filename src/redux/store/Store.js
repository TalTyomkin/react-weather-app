import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from '../slices/WeatherSlices';
import weatherCastReducer from '../slices/WeatherCastSlices';
import inputReducer from '../slices/InputSlices';
import favoritesReducer from '../slices/FavoritesSlices';

const store = configureStore({
    reducer: {
        inputState: inputReducer,
        weatherState: weatherReducer,
        weatherCastState: weatherCastReducer,
        favoritesState: favoritesReducer,
    }
},composeWithDevTools());

export default store;