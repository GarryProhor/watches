import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";

// Define a type for the slice state
interface FeaturedState {
    value: number
}

// Define the initial state using that type
const initialState: FeaturedState = {
    value: 0,
}

export const featuredSlice = createSlice({
    name: 'featured',

    initialState,
    reducers: {
        setFeatured: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
});

export const { setFeatured } = featuredSlice.actions;

export default featuredSlice.reducer;