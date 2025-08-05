import type { ReactNode } from "react";
import { useTokenVerifyFnQuery } from "../redux/featchers/token/tokenVerify";
import { useNavigate } from "react-router-dom";

const OnlyAdminRouting = ({ children }: { children: ReactNode }) => {
  const tokens = localStorage.getItem("token");
  const navigate = useNavigate();
  const { data, error, isLoading } = useTokenVerifyFnQuery(undefined);
  if (isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (!tokens) {
    navigate("/login");
    window.location.reload();
  }

  if (error) {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  }

  console.log(data, error, isLoading);
  if (data?.result?.role === "admin") {
    return <>{children}</>;
  } else {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  }
};

export default OnlyAdminRouting;
