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
import OnlyAdminRouting from "../secureRoute/OnlyAdminRouting";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/workList",
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
        element: (
          <OnlyAdminRouting>
            <CheckReport />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/createClientUser",
        element: (
          <OnlyAdminRouting>
            <CreateUser />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/createDoctorUser",
        element: (
          <OnlyAdminRouting>
            <CreateDoctor />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/aproveOrder",
        element: (
          <OnlyAdminRouting>
            <AproveOrder />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/reportMonitor",
        element: (
          <OnlyAdminRouting>
            <ReportMonitor />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/alluser",
        element: (
          <OnlyAdminRouting>
            <ShowAllUser />
          </OnlyAdminRouting>
        ),
      },
      {
        path: "/showDoctor",
        element: (
          <OnlyAdminRouting>
            <ShowAllDoctor />
          </OnlyAdminRouting>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
