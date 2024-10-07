import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const storeData = createSlice({
    name: "storeData",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value.push(action.payload);
        },
        senData: (state) => {
            return state.value;
        }
    }
})

export const {setValue, senData} = storeData.actions
export default storeData.reducer