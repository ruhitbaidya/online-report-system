/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDelete } from "react-icons/md";

import dayjs from "dayjs";
import {
  useDoctorsDeleteMutation,
  useGetAllDoctorsQuery,
} from "../redux/featchers/doctors/doctors.api";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const ShowAllDoctor = () => {
  const { data, isLoading, refetch } = useGetAllDoctorsQuery(undefined);
  const [deleteDoctors, { data: deleteData }] =
    useDoctorsDeleteMutation(undefined);
  console.log(deleteData);
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
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  {" "}
                  <p>Loading....</p>{" "}
                </tr>
              )}
              {data &&
                data?.result?.map((item: any) => (
                  <tr key={item?._id}>
                    <td>{item?._id} </td>
                    <td>
                      {item?.name} {item?.degree}{" "}
                    </td>
                    <td>{item?.role} </td>
                    <td>{dayjs(item?.createdAt).format("DD/MM/YYYY")}</td>
                    <td>{item?.email} </td>
                    <td>{item?.contactNo}</td>
                    <td>
                      <button className="text-green-400">
                        <FaEdit size={22} />
                      </button>{" "}
                      <button
                        onClick={async () => {
                          await deleteDoctors(item?._id);
                          toast.success(deleteData?.message);
                          refetch();
                        }}
                        className="text-red-500 ml-[8px]"
                      >
                        <MdDelete size={22} />
                      </button>{" "}
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

export default ShowAllDoctor;
