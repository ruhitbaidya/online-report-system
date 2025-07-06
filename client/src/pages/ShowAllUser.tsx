import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ShowAllUser = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div className="flex justify-between items-center my-[20px] gap-[25px]">
          <div className="flex-1">
            <input
              className="focus:outline-none p-[8px] border rounded-l-lg"
              type="text"
              placeholder="Search By Email"
            />
            <button className="bg-gray-700 px-[35px] py-[8px] text-white rounded-r-lg">
              Get
            </button>
          </div>
          <div className="flex-1">
            <input
              className="focus:outline-none p-[8px] border rounded-l-lg"
              type="text"
              placeholder="Search By Name"
            />
            <button className="bg-gray-700 px-[35px] py-[8px] text-white rounded-r-lg">
              Get
            </button>
          </div>
          <div className="flex-1">
            <input
              className="focus:outline-none p-[7.5px] border rounded-l-lg"
              type="text"
              placeholder="Search By Id"
            />
            <button className="bg-gray-700 px-[35px] py-[7px] text-white rounded-r-lg">
              Get
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Id </th>
                <th>Industy Name </th>
                <th>Role </th>
                <th>Date </th>
                <th>Email </th>
                <th>Contact </th>
                <th>Profile </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asdf12ads4f5 </td>
                <td>The Popular Diagnostic Center </td>
                <td>User </td>
                <td>12/12/2025 </td>
                <td>ruhitbaidya01@gmail.com </td>
                <td>01742772705 </td>
                <td>
                  <img src="" alt="" />{" "}
                </td>
                <td>
                  <button className="text-green-400">
                    <FaEdit size={22} />
                  </button>{" "}
                  <button className="text-red-500 ml-[8px]">
                    <MdDelete size={22} />
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAllUser;
