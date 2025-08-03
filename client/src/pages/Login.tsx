import Marquee from "react-fast-marquee";
import { SiSimplelogin } from "react-icons/si";
import { useForm } from "react-hook-form";
import {
  useDoctorLoginMutation,
  useUserLoginMutation,
} from "../redux/featchers/auth/user.login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Inputs = {
  user: string;
  password: string;
};

const Login = () => {
  const [sendData, setSendData] = useState("user");
  const [userLogin] = useUserLoginMutation();
  const [doctorsLogin] = useDoctorLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (info: Inputs) => {
    if (sendData === "user") {
      try {
        const result = await userLogin(info).unwrap();
        if (result?.result) {
          localStorage.setItem("token", result?.result);
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
      }
    }

    if (sendData === "doctor") {
      try {
        const result = await doctorsLogin(info).unwrap();
        if (result?.result) {
          localStorage.setItem("token", result?.result);
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
      }
    }
  };
  useEffect(() => {
    window.location.reload();
  }, []);
  return (
    <div className="container mx-auto px-[20px] h-screen flex justify-center items-center">
      <div>
        <div className="border p-[20px] rounded-lg lg:w-[40%] mx-auto mb-[20px]">
          <div className="flex justify-center items-center">
            <SiSimplelogin size={50} />
          </div>
          <h2 className="font-bold text-2xl text-center mb-[15px]">
            Login Your Account
          </h2>
          <div className="flex justify-end items-center">
            <div>
              <button
                onClick={() => setSendData("user")}
                className={`border px-[25px] py-[4px] rounded-lg ${
                  sendData === "user" ? "bg-gray-700 text-white" : ""
                }`}
                type="button"
              >
                User
              </button>
              <button
                onClick={() => setSendData("doctor")}
                className={`border px-[25px] py-[4px] rounded-lg ml-[5px] ${
                  sendData === "doctor" ? "bg-gray-700 text-white" : ""
                }`}
                type="button"
              >
                Doctor
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label htmlFor="userName">Enter User Name</label>
              <input
                {...register("user", { required: true })}
                className="focus:outline-none border p-[6px] rounded-lg w-full"
                type="text"
                placeholder="Enter User Name"
              />
              {errors.user && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                className="focus:outline-none border p-[6px] rounded-lg w-full"
                type="password"
                placeholder="Enter Password"
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="flex justify-end items-center">
              <button className="bg-gray-700 text-white px-[40px] py-[8px] rounded-lg">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="font-bold text-xl">
          <Marquee>
            RS Online Solution LTD. Always Ready for Your Services. Please
            Contact 01792150202.
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Login;
