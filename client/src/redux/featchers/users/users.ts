import { baseApi } from "../../baseApi/baseApi";

const createUser = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createuser: builder.mutation({
      query: (userData) => ({
        url: "/create-user",
        method: "POST",
        body: userData,
      }),
    }),
    getAllUser: builder.query({
      query: () => "/get-all-user",
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/delete-user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateuserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = createUser;
