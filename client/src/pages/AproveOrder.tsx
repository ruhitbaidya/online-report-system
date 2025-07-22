/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDelete } from "react-icons/md";
import SlidersShoen from "../components/SlidersShoen";
import { useGetAllDoctorsQuery } from "../redux/featchers/doctors/doctors.api";
import { useGetAllOrderQuery } from "../redux/featchers/orders/orders";
import { useDeleteReportMutation } from "../redux/featchers/report/sendReport";

const AproveOrder = () => {
  const { data, refetch } = useGetAllOrderQuery(undefined);
  const { data: doctorList } = useGetAllDoctorsQuery(undefined);
  const [deleteReport, { data: deleteReportData }] =
    useDeleteReportMutation(undefined);

  const handelOrderDelete = async (id: string) => {
    await deleteReport(id);
    refetch();
  };
  console.log(deleteReportData);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>History</th>
                <th>Image</th>
                <th>Procuder</th>
                <th>Aprove Docror</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.result?.map((item: any) => (
                  <tr>
                    <td>{item?.pasentId}</td>
                    <td>{item?.pasentName}</td>
                    <td>{item?.age}</td>
                    <td>{item?.history}</td>
                    <td>
                      <SlidersShoen image={item?.reportImage} />
                    </td>
                    <td>
                      {item?.producer?.map((prod: string, ind: string) => (
                        <>
                          {ind + 1}. <span>{prod}, </span> <br />
                        </>
                      ))}
                    </td>
                    <td>
                      <select className="w-full border p-[8px] rounded-lg focus:outline-none">
                        <option>--select--</option>
                        {doctorList &&
                          doctorList?.result?.map((item: any) => (
                            <>
                              <option value={item?._id}>{item?.name}</option>
                            </>
                          ))}
                      </select>
                    </td>
                    <td>
                      <button
                        onClick={() => handelOrderDelete(item?._id)}
                        className="cursor-pointer text-red-400"
                      >
                        <MdDelete size={27} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AproveOrder;
