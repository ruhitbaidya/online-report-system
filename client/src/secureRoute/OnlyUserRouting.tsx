import { jwtDecode } from "jwt-decode";
import { useEffect, useState, type ReactNode } from "react";
import { useGetSingalUserQuery } from "../redux/featchers/users/users";
import { Navigate } from "react-router-dom";

const OnlyUserRouting = ({ children }: { children: ReactNode }) => {
  const [decodedId, setDecodedId] = useState<string | null>(null);
  const [checkedToken, setCheckedToken] = useState(false);

  // Step 1: Decode token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<{ id: string; role: string }>(token);
        if (decoded?.id) {
          setDecodedId(decoded.id);
        }
      } catch (err) {
        console.error("Token decoding failed:", err);
      }
    }
    setCheckedToken(true); // ensures we don’t run prematurely
  }, []);

  // Step 2: Fetch user using decoded ID
  const { data, isLoading } = useGetSingalUserQuery(decodedId!, {
    skip: !decodedId,
  });

  // Step 3: Wait for both token check and API fetch
  if (!checkedToken || isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  // Step 4: If user role is 'user', allow access
  if (data?.role === "user") {
    return <>{children}</>;
  }

  // Step 5: If not valid or not user, redirect to login
  return <Navigate to="/login" />;
};

export default OnlyUserRouting;
