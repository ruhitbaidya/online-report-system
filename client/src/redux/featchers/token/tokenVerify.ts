import { baseApi } from "../../baseApi/baseApi";

const tokenVerify = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    tokenVerifyFn: builder.query({
      query: () => "/auth/token/verify",
    }),
  }),
});

export const { useTokenVerifyFnQuery } = tokenVerify;
