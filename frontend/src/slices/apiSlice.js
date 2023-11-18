import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
        // Lấy cookies từ localStorage hoặc từ nguồn khác
        const cookies = localStorage.getItem('cookies');

        // Thêm cookies vào header nếu có
        if (cookies) {
            headers.append('Cookie', cookies);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    sameSite: 'none',
    credentials: 'include',
    endpoints: (builder) => ({}),
});