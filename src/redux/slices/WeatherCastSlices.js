import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherCastAction = createAsyncThunk(
    'weatherCast/fetch',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`/forecasts/v1/daily/5day/${payload}?apikey=t2uuMTU2t3tDOClNXMfqTAo7UjGEJfYC`);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

const weatherCastSlices = createSlice({
    name: 'weatherCast',
    initialState: {weather:'loading'},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherCastAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherCastAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeatherCastAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});

export default weatherCastSlices.reducer;