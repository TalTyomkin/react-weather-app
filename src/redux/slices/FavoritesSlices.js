import { createSlice } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';


export const favoritesSlice = createSlice({
    name: 'favoritesArr',
    initialState: {
        myFavorites: []
    },
    reducers: {
        addFavorite: (state) => {
            state.myFavorites = [...state.myFavorites, {}]
        },
        //return an empty "proxy", can't figure out why...
        removeFavorite: (state, action) => {
            state.myFavorites = action.payload
        }
    }
});

export const {addFavorite,removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
