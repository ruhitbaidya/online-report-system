import Marquee from "react-fast-marquee";
import { SiSimplelogin } from "react-icons/si";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px] h-screen flex justify-center items-center">
        <div>
          <div className="border p-[20px] rounded-lg">
            <div className="flex justify-center items-center">
              <SiSimplelogin size={50} />
            </div>
            <h2 className="font-bold text-2xl text-center mb-[15px] flex justify-center items-center">
              Login Your Account
            </h2>
            <form className="space-y-3">
              <div>
                <label htmlFor="userName">Enter User Name</label>
                <input
                  className="focus:outline-none border p-[6px] rounded-lg w-full"
                  type="text"
                  placeholder="Enter User Name"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="focus:outline-none border p-[6px] rounded-lg w-full"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex justify-end items-center">
                <button className="bg-gray-700 text-white px-[40px] py-[8px] rounded-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Login;
