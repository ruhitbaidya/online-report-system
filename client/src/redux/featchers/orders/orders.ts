/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../baseApi/baseApi";

const orderOperation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => "/get-all-report",
    }),
    approvedOrder: builder.mutation({
      query: (id: { aprId: string; repId: string }) => ({
        url: "/aprove-order",
        method: "PATCH",
        body: { id },
      }),
    }),
  }),
});

export const { useGetAllOrderQuery, useApprovedOrderMutation } = orderOperation;
