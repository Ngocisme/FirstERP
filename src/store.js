import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/Login/AuthSlice";

const reducer = {
    auth: authReducer
}

const store = configureStore({
    reducer: reducer,
})

export default store;