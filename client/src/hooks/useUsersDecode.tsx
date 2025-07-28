import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useGetSingalUserQuery } from "../redux/featchers/users/users";
import { useNavigate } from "react-router-dom";

type DecodedToken = {
  id: string;
  role: string;
};

const useUsersDecode = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserId(decoded.id);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading } = useGetSingalUserQuery(userId!, {
    skip: !userId,
  });
  console.log(data);
  if (!data?.success && data?.message === "Unauthorize User") {
    localStorage.removeItem("token");
  }
  return { user: data?.result, loadings: isLoading };
};

export default useUsersDecode;
