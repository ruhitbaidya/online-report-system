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
import ShowAllUser from "../pages/ShowAllUser";
import ShowAllDoctor from "../pages/ShowAllDoctor";
import OnlyUserRouting from "../secureRoute/OnlyUserRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: (
          <OnlyUserRouting>
            <WorkList />
          </OnlyUserRouting>
        ),
      },
      {
        path: "/order",
        element: (
          <OnlyUserRouting>
            <OrderEntry />
          </OnlyUserRouting>
        ),
      },
      {
        path: "/report",
        element: (
          <OnlyUserRouting>
            <Report />
          </OnlyUserRouting>
        ),
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
      {
        path: "/alluser",
        element: <ShowAllUser />,
      },
      {
        path: "/showDoctor",
        element: <ShowAllDoctor />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
