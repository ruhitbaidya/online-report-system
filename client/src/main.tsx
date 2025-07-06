import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.tsx";
import "react-tooltip/dist/react-tooltip.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
