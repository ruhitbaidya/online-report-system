import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Report = () => {
  const [firstToDate, setFirstToDate] = useState("");
  const [lastToDate, setlastToDate] = useState("");
  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    setFirstToDate(date);
    setlastToDate(date);
  }, []);
  console.log(firstToDate, lastToDate);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="text-center text-2xl font-bold my-[10px]">
            Report List
          </h2>
          <div className="flex justify-between items-center my-[12px]">
            <div>
              <input
                value={firstToDate}
                onChange={(e) => setFirstToDate(e.target.value)}
                className="border p-[6px] rounded-lg"
                type="date"
              />{" "}
              <input
                value={lastToDate}
                onChange={(e) => setlastToDate(e.target.value)}
                className="border p-[6px] rounded-l-lg"
                type="date"
              />
              <button className="bg-gray-700 text-white px-[30px] py-[8px] rounded-r-lg">
                Get
              </button>
            </div>
            <div>
              <input
                className="border p-[7px] rounded-l-lg focus:outline-none"
                type="text"
                placeholder="Search By Name"
              />
              <button className="bg-gray-700 text-white px-[30px] py-[8px] rounded-r-lg">
                Get
              </button>
            </div>
            <div>
              <input
                className="border p-[7px] rounded-l-lg focus:outline-none"
                type="text"
                placeholder="Search By Id"
              />
              <button className="bg-gray-700 text-white px-[30px] py-[8px] rounded-r-lg">
                Get
              </button>
            </div>
          </div>
          <div className="min-h-[60vh]">
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
                      Complate
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
                      Recheck
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="my-[10px]">
            <div className="flex justify-center items-center gap-[15px] font-bold">
              <button className="bg-gray-800 text-white p-[10px] rounded-lg">
                <FaArrowLeft size={22} />
              </button>
              <button className="bg-gray-800 text-white py-[8px] rounded-lg px-[12px] text-[17px]">
                1
              </button>
              <button className="bg-gray-800 text-white py-[8px] rounded-lg px-[12px] text-[17px]">
                2
              </button>
              <button className="bg-gray-800 text-white py-[8px] rounded-lg px-[12px] text-[17px]">
                3
              </button>
              <button className="bg-gray-800 text-white p-[10px] rounded-lg">
                <FaArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
