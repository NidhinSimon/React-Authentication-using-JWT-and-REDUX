import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './Redux/adminSlice'
import { adminapiSlice } from './Redux/adminapiSlice'

const store =configureStore({
    reducer:{
        admin:adminReducer,
        [adminapiSlice.reducerPath]:adminapiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(adminapiSlice.middleware),
    devTools:true
})

export default store