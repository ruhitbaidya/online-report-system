import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Root";
import Home from "../pages/Home";
import WorkList from "../pages/WorkList";
import OrderEntry from "../pages/OrderEntry";
import Report from "../pages/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/worklist",
        element: <WorkList />,
      },
      {
        path: "/order",
        element: <OrderEntry />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
]);

export default router;
