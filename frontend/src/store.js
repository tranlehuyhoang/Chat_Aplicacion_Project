import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userStatusSlice from './slices/userStatusSlice';
import userSelectedSlice from './slices/userSelectedSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        users: userStatusSlice,
        userSelected: userSelectedSlice

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;