import { Link, NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { useTokenVerifyFnQuery } from "../redux/featchers/token/tokenVerify";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const { data: user, isLoading: loadings } = useTokenVerifyFnQuery(undefined);
  return (
    <div className="bg-gray-700 text-white py-[12px]">
      {loadings ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : (
        <div className="container mx-auto px-[10px]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">
                <Link to="/">RJ Online</Link>
              </h3>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-[30px]">
                {user?.result?.role === "user" && (
                  <>
                    <li>
                      <NavLink to="/workList">Worklist</NavLink>
                    </li>
                    <li>
                      <NavLink to="/report">Report</NavLink>
                    </li>
                    <li>
                      <NavLink to="/order">Order Entry</NavLink>
                    </li>
                  </>
                )}
                {user?.result?.role === "admin" && (
                  <>
                    <li>
                      <NavLink to="/checkReport">Check Report</NavLink>
                    </li>
                    <li>
                      <NavLink to="/createClientUser">Create User</NavLink>
                    </li>
                    <li>
                      <NavLink to="/createDoctorUser">Create Doctor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aproveOrder">Approve Order</NavLink>
                    </li>
                    <li>
                      <NavLink to="/reportMonitor">Report Monitor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/alluser">Show All User</NavLink>
                    </li>
                    <li>
                      <NavLink to="/showDoctor">Show All Doctor</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="flex gap-[30px]">
              <button>
                <FaBell size={22} />
              </button>
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? (
                  <MdOutlineLightMode size={22} />
                ) : (
                  <MdDarkMode size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
