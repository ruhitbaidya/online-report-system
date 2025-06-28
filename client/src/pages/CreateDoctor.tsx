const CreateDoctor = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px] h-[90vh] flex justify-center items-center">
        <div className="w-[90%] mx-auto border p-[20px] rounded-lg">
          <h2 className="mb-[20px] font-bold text-center text-2xl">
            Reporting Doctor Register
          </h2>
          <form>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Enter Name</label>
                <input
                  type="text"
                  placeholder="Enter Doctor Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Email</label>
                <input
                  type="email"
                  placeholder="Enter Doctor Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Address</label>
                <input
                  type="text"
                  placeholder="Enter Doctor Address"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="gender">Gender</label>
                <select
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                  name=""
                  id=""
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="profileImage">Profile Image</label>
                <input
                  type="file"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
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

export default CreateDoctor;
