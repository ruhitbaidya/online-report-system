import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[82vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
