import { useForm } from "react-hook-form";
import type { TDoctors } from "../types/allTypes";
import { useCreateDoctorsMutation } from "../redux/doctors/doctors.api";

const CreateDoctor = () => {
  const [createDoctors, { data: doctorData, isLoading: doctorLoading }] =
    useCreateDoctorsMutation(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDoctors>();
  const onSubmit = async (data: TDoctors) => {
    await createDoctors(data);
  };
  console.log(doctorData);
  return (
    <div>
      <div className="container mx-auto px-[20px] h-[90vh] flex justify-center items-center">
        <div className="w-[90%] mx-auto border p-[20px] rounded-lg">
          <h2 className="mb-[20px] font-bold text-center text-2xl">
            Reporting Doctor Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Enter Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Doctor Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="name">Doctors Degrees</label>
                <input
                  {...register("degree", { required: true })}
                  type="text"
                  placeholder="Enter Doctor Degrees"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.degree && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Address</label>
                <input
                  {...register("addrese", { required: true })}
                  type="text"
                  placeholder="Enter Doctor Address"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.addrese && <span>This field is required</span>}
              </div>
            </div>
            <div>
              <div className="flex-1">
                <label htmlFor="name">Enter Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Doctor Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="gender">Gender</label>
                <select
                  {...register("gender", { required: true })}
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                  name=""
                  id=""
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <span>This field is required</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  {...register("contactNo", { required: true })}
                  type="number"
                  placeholder="Contact Number"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
                {errors.contactNo && <span>This field is required</span>}
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="password">Password</label>
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
                {doctorLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDoctor;
