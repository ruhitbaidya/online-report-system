import { baseApi } from "../../baseApi/baseApi";

const orderOperation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => "/get-all-report",
    }),
  }),
});

export const { useGetAllOrderQuery } = orderOperation;
