import { apiSlice } from './apiSlice.js';
const MESSAGE_URL = 'api/message';

export const messageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessage: builder.mutation({
            query: (data) => ({
                url: `${MESSAGE_URL}/${data}`,
                method: 'GET',

            }),
        }),
    }),
});

export const {
    useGetMessageMutation,

} = messageApiSlice;