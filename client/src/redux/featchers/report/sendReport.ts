import { baseApi } from "../../baseApi/baseApi";

const reportsender = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendReport: builder.mutation({
      query: (report) => ({
        url: "/create-report",
        method: "POST",
        body: report,
      }),
    }),
    deleteReport: builder.mutation({
      query: (id: string) => ({
        url: `/deleteReport/${id}`,
        method: "DELETE",
      }),
    }),
    getAllSpeacficReport: builder.query({
      query: () => `/get-all-report`,
    }),
  }),
});

export const { useSendReportMutation, useDeleteReportMutation } = reportsender;
