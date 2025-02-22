// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector';

// Define a service using a base URL and expected endpoints
export const TestApi = createApi({
  reducerPath: 'TestApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/user/', }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (id: number) => `/${id}`,
    }),
    getAllCart: builder.query({
      query: () => ({
        url: "getCarts"
      })
    }),
    CreateUser: builder.mutation({
      query: (args) => ({
        url: "signup",
        body:args?.body
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetAllCartQuery, useCreateUserMutation } = TestApi;