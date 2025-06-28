import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Root";
import WorkList from "../pages/WorkList";
import OrderEntry from "../pages/OrderEntry";
import Report from "../pages/Report";
import Login from "../pages/Login";
import CheckReport from "../pages/CheckReport";
import CreateUser from "../pages/CreateUser";
import CreateDoctor from "../pages/CreateDoctor";
import AproveOrder from "../pages/AproveOrder";
import ReportMonitor from "../pages/ReportMonitor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
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
      {
        path: "/checkReport",
        element: <CheckReport />,
      },
      {
        path: "/createClientUser",
        element: <CreateUser />,
      },
      {
        path: "/createDoctorUser",
        element: <CreateDoctor />,
      },
      {
        path: "/aproveOrder",
        element: <AproveOrder />,
      },
      {
        path: "/reportMonitor",
        element: <ReportMonitor />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
