import {configureStore} from "@reduxjs/toolkit";
import storeDataReducer from "./features/storeData.js";

export const store = configureStore({
    reducer: {
        storeData: storeDataReducer,
    }
})