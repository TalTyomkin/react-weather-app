import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`/currentconditions/v1/${payload}?apikey=t2uuMTU2t3tDOClNXMfqTAo7UjGEJfYC`);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {weather:'loading'},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});

export default weatherSlice.reducer;