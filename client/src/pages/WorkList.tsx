import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const WorkList = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="text-center text-2xl font-bold my-[10px]">
            Work List
          </h2>
          <div className="min-h-[70vh]">
            <table className="min-w-full divide-y divide-gray-300 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Edit Info
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                    123
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                      Progress
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Ruhit Baidya
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    27 Yrs
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Male
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Chest P/A View
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Dr. demosong
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-gray-700 hover:text-gray-900">
                      <FaRegEdit className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-[10px]">
            <div className="flex justify-center items-center gap-[15px] font-bold">
              <button className="bg-gray-800 text-white p-[10px]">
                <FaArrowLeft size={22} />
              </button>
              <button className="bg-gray-800 text-white py-[8px] px-[12px] text-[17px]">
                1
              </button>
              <button className="bg-gray-800 text-white py-[8px] px-[12px] text-[17px]">
                2
              </button>
              <button className="bg-gray-800 text-white py-[8px] px-[12px] text-[17px]">
                3
              </button>
              <button className="bg-gray-800 text-white p-[10px]">
                <FaArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
