import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userSelected: ''
};

const userSelectedSlice = createSlice({
    name: 'userSelected',
    initialState,
    reducers: {
        setUserSelectedRedux: (state, action) => {
            state.userSelected = action.payload;
        },

    },
});

export const { setUserSelectedRedux } = userSelectedSlice.actions;

export default userSelectedSlice.reducer;