/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../redux/users/users";
import { toast } from "sonner";
import { useEffect } from "react";
const ShowAllUser = () => {
  const {
    data: showData,
    isLoading: showLoading,
    refetch,
  } = useGetAllUserQuery(undefined);
  const [deleteUser, { data: deleteData, isLoading: deleteLoading }] =
    useDeleteUserMutation();
  console.log(deleteData?.message);
  useEffect(() => {
    refetch();
  }, [refetch]);
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
              {showLoading && (
                <tr>
                  {" "}
                  <p>Loading....</p>{" "}
                </tr>
              )}
              {showData &&
                showData?.result?.map((item: any) => (
                  <tr key={item?._id}>
                    <td>{item?._id} </td>
                    <td>{item?.industyName} </td>
                    <td>{item?.role} </td>
                    <td>{dayjs(item?.createdAt).format("DD/MM/YYYY")}</td>
                    <td>{item?.email} </td>
                    <td>{item?.contactNo}</td>
                    <td>
                      <img
                        className="w-[50px] h-[50px]"
                        src={item?.profileImage}
                        alt=""
                      />{" "}
                    </td>
                    <td>
                      <button className="text-green-400">
                        <FaEdit size={22} />
                      </button>{" "}
                      <button
                        disabled={deleteLoading}
                        onClick={async () => {
                          await deleteUser(item?._id);

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

export default ShowAllUser;
