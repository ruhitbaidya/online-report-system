import { Navigate } from "react-router-dom";
import useUsersDecode from "../hooks/useUsersDecode";
import type { ReactNode } from "react";

const OnlyUserRouting = ({ children }: { children: ReactNode }) => {
  const { user, loadings } = useUsersDecode();
  if (loadings || !user) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (user?.role === "user") {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};

export default OnlyUserRouting;
