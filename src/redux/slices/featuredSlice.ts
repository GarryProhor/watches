import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";

export const fetchFeature = createAsyncThunk('watches/fetchFeatureStatus',
    async (params) =>{
        const {data} = await axios
            .get(
                `https://62fb3890abd610251c038025.mockapi.io/featured`
            )
        return data;
    });

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

type FeaturedItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;

}
interface FeaturedSliceState {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    features: FeaturedItem[];
    status: Status;
}

const initialState: { features: any[]; status: Status } = {
    features: [],
    status: Status.LOADING, //loading | success | error

};

const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {
        setFeatured(state, action: PayloadAction<FeaturedItem>){
            // @ts-ignore
            state.features = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchFeature.pending, (state)=>{
            state.status = Status.LOADING;
            state.features = [];
        });
        builder.addCase(fetchFeature.fulfilled, (state, action)=>{
            state.features = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchFeature.rejected, (state)=>{
            state.status = Status.ERROR;
            state.features = [];
        });
    }


});
export const selectFeatured = (state: RootState) => state.featured;
export const  { setFeatured } = featuredSlice.actions;

export default featuredSlice.reducer;