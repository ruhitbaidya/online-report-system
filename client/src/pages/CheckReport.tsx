/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTokenVerifyFnQuery } from "../redux/featchers/token/tokenVerify";
import { useEffect, useState } from "react";
import { useGetAllSpeacficReportQuery } from "../redux/featchers/report/sendReport";
import SlidersShoen from "../components/SlidersShoen";
import ReportingTabs from "../components/ReportingTabs";

const CheckReport = () => {
  const { data: tokenData } = useTokenVerifyFnQuery(undefined);
  const [ids, setIds] = useState("");
  const { data } = useGetAllSpeacficReportQuery(ids);

  useEffect(() => {
    if (tokenData) {
      setIds(tokenData?.result?.id);
    }
  }, [tokenData]);
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
                {data &&
                  data?.result?.map((item: any) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                        {item?.pasentId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select name="" id="">
                          <option value="">In Progress</option>
                          <option value="">Complate</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item?.pasentName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item?.age} Yrs
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="bg-gray-700 text-white px-[25px] py-[8px] rounded-lg"
                          onClick={() => {
                            const modal = document.getElementById(
                              "my_modal_4"
                            ) as HTMLDialogElement | null;
                            if (modal) {
                              modal.showModal();
                            }
                          }}
                        >
                          Create Report
                        </button>
                        <dialog id="my_modal_4" className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <div>
                              <ReportingTabs tabsCount={item?.producer} />
                            </div>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item?.producer?.map((pro: string) => (
                          <>
                            <span>{pro}</span>
                            <br />
                          </>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <SlidersShoen image={item?.reportImage} />
                      </td>

                      <td
                        title={item?.history}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                      >
                        History
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckReport;
