import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authLogin = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth",
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (info) => ({
        url: "/login",
        method: "POST",
        body: info,
      }),
    }),
  }),
});

export const { useUserLoginMutation } = authLogin;
