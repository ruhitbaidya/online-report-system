import Marquee from "react-fast-marquee";
import { SiSimplelogin } from "react-icons/si";
import { useForm } from "react-hook-form";
import { useUserLoginMutation } from "../redux/featchers/auth/user.login";
type Inputs = {
  user: string;
  password: string;
};
const Login = () => {
  const [userLogin, { data }] = useUserLoginMutation(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (info: Inputs) => {
    await userLogin(info);
    if (data?.result) {
      localStorage.setItem("token", data.result);
    }
  };
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-[20px] h-screen flex justify-center items-center">
        <div>
          <div className="border p-[20px] rounded-lg lg:w-[40%] mx-auto mb-[20px]">
            <div className="flex justify-center items-center">
              <SiSimplelogin size={50} />
            </div>
            <h2 className="font-bold text-2xl text-center mb-[15px] flex justify-center items-center">
              Login Your Account
            </h2>
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
              RS Online Solution LTD. Alawyes Ready to for Your Services. Please
              Contact 01792150202.
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
