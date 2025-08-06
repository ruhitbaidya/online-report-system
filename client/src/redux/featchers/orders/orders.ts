/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../baseApi/baseApi";

const orderOperation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (ids: string) => `/get-all-report/${ids}`,
    }),
    approvedOrder: builder.mutation({
      query: (id: { aprId: string; repId: string }) => ({
        url: "/aprove-order",
        method: "PATCH",
        body: { id },
      }),
    }),
    adminGetReport: builder.query({
      query: () => "/admin-report",
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useApprovedOrderMutation,
  useAdminGetReportQuery,
} = orderOperation;
