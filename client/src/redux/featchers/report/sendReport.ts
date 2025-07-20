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
  }),
});

export const { useSendReportMutation } = reportsender;
