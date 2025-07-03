import { useForm } from "react-hook-form";
import type { Inputs } from "../types/allTypes";
import { useState } from "react";
import { useCreateuserMutation } from "../redux/users/users";

const CreateUser = () => {
  const [sendData, { data }] = useCreateuserMutation();
  const [file, setFile] = useState<File | null>(null);
  const [disply, setDisply] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    if (!file) {
      alert("Fill This File");
      return;
    }
    const formData = new FormData();
    formData.append("industyName", data.industyName);
    formData.append("address", data.address);
    formData.append("contactNo", data.contactNo);
    formData.append("email", data.email);
    formData.append("ownerName", data.ownerName);
    formData.append("password", data.password);
    formData.append("image", file);
    console.log(formData);
    await sendData(formData);
  };
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-[20px] h-[90vh] flex justify-center items-center">
        <div className="w-[90%] mx-auto p-[20px] border rounded-lg">
          <h2 className="text-center font-bold text-2xl">Create User</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Industy Name</label>
                <input
                  {...register("industyName", { required: true })}
                  type="text"
                  placeholder="Enter Industy Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.industyName && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Address</label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Enter Doctor Address"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.address && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Contact Number</label>
                <input
                  {...register("contactNo", { required: true })}
                  type="text"
                  placeholder="Contact Number"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.contactNo && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="name">Owner name</label>
                <input
                  {...register("ownerName", { required: true })}
                  type="text"
                  placeholder="Owner Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.ownerName && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <label htmlFor="name">Profile Image</label>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files?.[0]) {
                          setFile(e.target.files[0]);
                          setDisply(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                      type="file"
                      className="w-full p-[8px] border focus:outline-none rounded-lg"
                    />
                  </div>
                  <div className="">
                    <img
                      className="w-[80px] h-[80px] rounded-lg mt-[20px]"
                      src={disply}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="name">Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-gray-700 px-[40px] py-[9px] rounded-lg text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
