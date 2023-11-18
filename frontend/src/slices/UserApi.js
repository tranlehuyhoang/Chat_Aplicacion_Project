import { apiSlice } from './apiSlice.js';
const USERS_URL = 'api/user';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data,
            }),
        }),
        updateUserAvatar: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/update-avatar/${data.userid}`,
                method: 'PUT',
                body: data,
            }),
        }),
        updateUserNickname: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/update-nickname/${data.userid}`,
                method: 'PUT',
                body: data,
            }),
        }),
        getall: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/all`,
                method: 'GET',

            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserAvatarMutation,
    useUpdateUserNicknameMutation,
    useGetallMutation,
} = userApiSlice;