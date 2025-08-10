import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../redux/baseApi/baseApi";
import { authLogin } from "../redux/featchers/auth/user.login";
import { reportSlice } from "../redux/featchers/reportsave/reportSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authLogin.reducerPath]: authLogin.reducer,
    report: reportSlice.reducer,
  },
  middleware: (getMiddlewate) =>
    getMiddlewate().concat(baseApi.middleware, authLogin.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
