import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CheckReport = () => {
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="font-bold mt-[20px] text-2xl">Check Report</h2>
          <div className="mt-[25px]">
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
                    Create Report
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                    History
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
                    <button className="bg-gray-700 text-white px-[25px] py-[8px] rounded-lg">
                      Create Report
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Chest P/A View
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <Zoom>
                      <img
                        className="w-[50px] h-[50px]"
                        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                        src="https://media.istockphoto.com/id/92988886/photo/chest-x-ray-image-for-physicians-examination.jpg?s=612x612&w=0&k=20&c=BNbsxzfiHWIQHgaDCb-nw8t0nmzFOsgAwGDeMBdMx5I="
                        width="500"
                      />
                    </Zoom>
                  </td>

                  <td
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, blanditiis autem. Culpa, alias at nobis molestiae
                    suscipit nam minus dolorum corrupti repellendus est, atque
                    laboriosam ut, quam facilis! Aspernatur, enim."
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                  >
                    history
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckReport;
