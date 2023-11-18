import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userStatus: ''
};

const userStatusSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserStatusRedux: (state, action) => {
            state.userStatus = action.payload;

        },

    },
});

export const { setUserStatusRedux } = userStatusSlice.actions;

export default userStatusSlice.reducer;