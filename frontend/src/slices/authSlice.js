import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            localStorage.setItem('token', JSON.stringify(action.payload._id));
            window.location.href = "https://ps26819.vercel.app/";
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');

        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;