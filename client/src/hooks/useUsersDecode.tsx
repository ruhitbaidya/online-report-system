import { useEffect, useState } from "react";
import { useGetSingalUserQuery } from "../redux/featchers/users/users";
import { useNavigate } from "react-router-dom";

const useUsersDecode = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserId("asdfasdf56sd6");
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
