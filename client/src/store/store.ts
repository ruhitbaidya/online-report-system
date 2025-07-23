import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../redux/baseApi/baseApi";
import { authLogin } from "../redux/featchers/auth/user.login";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authLogin.reducerPath]: authLogin.reducer,
  },
  middleware: (getMiddlewate) =>
    getMiddlewate().concat(baseApi.middleware, authLogin.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
