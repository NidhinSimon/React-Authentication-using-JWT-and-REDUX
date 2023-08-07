import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";


const adminstore=configureStore({
    reducer:{},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true
})
export default adminstore
