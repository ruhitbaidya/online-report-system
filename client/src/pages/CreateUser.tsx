const CreateUser = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px] h-[90vh] flex justify-center items-center">
        <div className="w-[90%] mx-auto p-[20px] border rounded-lg">
          <h2 className="text-center font-bold text-2xl">Create User</h2>
          <form>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Industy Name</label>
                <input
                  type="text"
                  placeholder="Enter Industy Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="name">Enter Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
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
                <label htmlFor="name">Contact Number</label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="name">Owner name</label>
                <input
                  type="text"
                  placeholder="Owner Name"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <div className="flex-1">
                <label htmlFor="name">Profile Image</label>
                <input
                  type="file"
                  className="w-full p-[8px] border focus:outline-none rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="name">Password</label>
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

export default CreateUser;
