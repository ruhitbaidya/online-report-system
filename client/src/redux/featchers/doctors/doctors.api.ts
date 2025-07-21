import type { TDoctors } from "../../../types/allTypes";
import { baseApi } from "../../baseApi/baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDoctors: builder.mutation({
      query: (data: TDoctors) => ({
        url: "/create-doctors",
        method: "POST",
        body: data,
      }),
    }),
    getAllDoctors: builder.query({
      query: () => "/get-all-doctors",
    }),
    doctorsDelete: builder.mutation({
      query: (id: string) => ({
        url: `/delete-doctors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateDoctorsMutation,
  useGetAllDoctorsQuery,
  useDoctorsDeleteMutation,
} = doctorsApi;
