import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminInfo: localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.adminInfo = action.payload;
            localStorage.setItem('adminInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.adminInfo = null
            localStorage.removeItem('adminInfo')
        }
    }
})

export const { setCredentials, logout } = adminSlice.actions

export default adminSlice.reducer