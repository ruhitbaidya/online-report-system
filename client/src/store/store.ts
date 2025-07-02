import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../redux/baseApi/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getMiddlewate) => getMiddlewate().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
