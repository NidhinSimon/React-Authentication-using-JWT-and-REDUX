import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const adminapiSlice=createApi({
    baseQuery,
    tagTypes:['Admin'],
    endpoints:(builder)=>({

    })
})