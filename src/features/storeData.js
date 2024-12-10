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
        }
    }
})

export const {setValue} = storeData.actions
export default storeData.reducer