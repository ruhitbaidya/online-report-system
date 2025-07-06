import type { TDoctors } from "../../types/allTypes";
import { baseApi } from "../baseApi/baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDoctors: builder.mutation({
      query: (data: TDoctors) => ({
        url: "/create-doctors",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateDoctorsMutation } = doctorsApi;
