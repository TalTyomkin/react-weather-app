import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInputAction = createAsyncThunk(
    'input/fetch',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`/locations/v1/cities/autocomplete?apikey=t2uuMTU2t3tDOClNXMfqTAo7UjGEJfYC&q=${payload}`);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

const inputSlice = createSlice({
    name: 'input',
    initialState: {input:[]},
    extraReducers: (builder) => {
        builder.addCase(fetchInputAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchInputAction.fulfilled, (state, action) => {
            state.input = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchInputAction.rejected, (state, action) => {
            state.loading = false;
            state.input = undefined;
            state.error = action?.payload;
        });
    },
});

export default inputSlice.reducer;