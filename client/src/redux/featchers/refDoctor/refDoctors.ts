import type { TRefDoctor } from "../../../types/allTypes";
import { baseApi } from "../../baseApi/baseApi";

const createDoctor = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRefDoctor: builder.mutation({
      query: (doctor: TRefDoctor) => ({
        url: "/createRefDoctors",
        method: "POST",
        body: doctor,
      }),
    }),
  }),
});

export const { useCreateRefDoctorMutation } = createDoctor;
