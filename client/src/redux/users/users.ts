import { baseApi } from "../baseApi/baseApi";

const createUser = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createuser: builder.mutation({
      query: (userData) => ({
        url: "/create-user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateuserMutation } = createUser;
