import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useGetSingalUserQuery } from "../redux/featchers/users/users";

type DecodedToken = {
  id: string;
  role: string;
};

const useUsersDecode = () => {
  const [userId, setUserId] = useState<string | null>(null);

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
    }
  }, []);

  const { data, isLoading } = useGetSingalUserQuery(userId!, {
    skip: !userId,
  });

  return { user: data?.result, loadings: isLoading };
};

export default useUsersDecode;
