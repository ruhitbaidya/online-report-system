/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { xrayNames } from "../needJson/test";
import type { TReport } from "../types/allTypes";
import { useSendReportMutation } from "../redux/featchers/report/sendReport";
import CreateRefDoctor from "../components/CreateRefDoctor";
import { useGetSingalUserQuery } from "../redux/featchers/users/users";
import { useTokenVerifyFnQuery } from "../redux/featchers/token/tokenVerify";
import { toast } from "sonner";

const OrderEntry = () => {
  const [getUserid, setGetUserid] = useState("");
  const { data: tokenData } = useTokenVerifyFnQuery(undefined);
  const { data: userData } = useGetSingalUserQuery(getUserid);
  const [reportSend, { data: repoData, isLoading }] = useSendReportMutation();
  const [selectTest, setSelectTest] = useState<string[]>([]);
  const [toogleTest, setToogleTest] = useState<boolean>(true);
  const [testName, setTestName] = useState<string[]>([]);
  const [testImage, setTestImage] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log(userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TReport>();

  const onSubmit = async (data: TReport) => {
    const formData = new FormData();

    // 1️⃣ Combine all form data + selected procedures
    const patientData = {
      ...data,
      producer: selectTest,
      clientId: tokenData?.result?.id,
    };

    // 2️⃣ Append the JSON string to FormData
    formData.append("patientData", JSON.stringify(patientData));

    // 3️⃣ Append uploaded files under key `testImg`
    const fileInput = fileInputRef.current;
    if (fileInput?.files?.length) {
      Array.from(fileInput.files).forEach((file) => {
        formData.append("testImg", file);
      });
    }

    await reportSend(formData).unwrap();
  };

  console.log(repoData);
  const handelChange = (modality: string) => {
    setTestName([]);
    if (modality === "x-ray") {
      setTestName(xrayNames);
    } else {
      setTestName(["ECG"]);
    }
  };

  useEffect(() => {
    if (tokenData) {
      setGetUserid(tokenData?.result?.id);
    }
    if (repoData) {
      toast.success(repoData?.message);
      reset();
      setTestImage([]);
    }
    setTestName([]);
  }, [tokenData, repoData, reset]);

  return (
    <div className="container mx-auto px-[20px]">
      <h2 className="font-bold text-2xl my-[20px]">Order Entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[80%] mx-auto border rounded-lg p-[10px]">
          {/* Header & Modal */}
          <div className="mb-[10px]">
            <div className="flex justify-between items-center gap-[30px]">
              <h2 className="font-bold border p-[8px] rounded-lg flex-1">
                {userData?.result?.industyName}
              </h2>
              <button
                type="button"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement;
                  modal?.showModal();
                }}
                className="bg-gray-700 px-[30px] py-[8px] text-white rounded-lg"
              >
                New Doctor Entry
              </button>
            </div>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div>
                  <CreateRefDoctor clientId="6862cfd3366bd452f564ca5f" />
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* Patient ID */}
          <div className="mb-[10px]">
            <label className="block">Patient ID:</label>
            <input
              {...register("pasentId", { required: true })}
              className="focus:outline-none border p-[6px] rounded-lg"
              type="text"
              placeholder="Patient ID"
            />
            {errors.pasentId && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Name, Age, Gender */}
          <div className="flex justify-between gap-[30px] mb-[10px]">
            <div className="flex-1">
              <label>Patient Name:</label>
              <input
                {...register("pasentName", { required: true })}
                type="text"
                className="focus:outline-none border p-[6px] w-full rounded-lg"
              />
              {errors.pasentName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex-1">
              <label>Age:</label>
              <input
                {...register("age", { required: true })}
                type="number"
                className="focus:outline-none border p-[6px] w-full rounded-lg"
              />
              {errors.age && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex-1">
              <label>Gender:</label>
              <select
                {...register("gender", { required: true })}
                className="focus:outline-none border p-[6px] w-full rounded-lg"
              >
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          {/* Ref Doctor, Procedure, Modality */}
          <div className="flex justify-between gap-[30px] mb-[10px]">
            <div className="flex-1">
              <label>Ref By:</label>
              <input
                {...register("refDoctor", { required: true })}
                type="text"
                className="focus:outline-none border p-[6px] w-full rounded-lg"
              />
              {errors.refDoctor && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex-1 relative">
              <label>Procedure:</label>
              <div
                className="border rounded-lg p-[6px] cursor-pointer"
                onClick={() => setToogleTest(!toogleTest)}
              >
                {selectTest.length > 0
                  ? selectTest.join(", ")
                  : "Select Your Procedure"}
              </div>
              {!toogleTest && (
                <div className="absolute z-10 rounded-lg p-[6px] shadow-lg w-full h-[200px] border bg-white">
                  <input
                    className="p-[3px] focus:outline-none rounded-lg mb-[10px] border w-full"
                    type="text"
                    placeholder="Search Procedure"
                  />
                  <div className="overflow-scroll h-[150px]">
                    {testName.map((item, idx) => (
                      <div key={`proc-${idx}`}>
                        <label>
                          <input
                            type="checkbox"
                            value={item}
                            checked={selectTest.includes(item)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectTest([...selectTest, item]);
                              } else {
                                setSelectTest(
                                  selectTest.filter((t) => t !== item)
                                );
                              }
                            }}
                          />{" "}
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1">
              <label>Modality:</label>
              <select
                onChange={(e) => handelChange(e.target.value)}
                className="focus:outline-none border p-[6px] w-full rounded-lg"
              >
                <option value="">--select--</option>
                <option value="x-ray">X-Ray</option>
                <option value="ecg">ECG</option>
                <option value="ctscan">CT Scan</option>
                <option value="mri">MRI</option>
              </select>
            </div>
          </div>

          {/* History */}
          <div className="mb-[10px]">
            <label>History:</label>
            <textarea
              {...register("history", { required: true })}
              className="focus:outline-none border p-[6px] w-full rounded-lg"
              placeholder="Enter history..."
            ></textarea>
            {errors.history && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* File Upload and Submit */}
          <div className="mt-[10px] flex justify-between items-center">
            <div className="flex-1">
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  const previews = files.map((file) =>
                    URL.createObjectURL(file)
                  );
                  setTestImage(previews);
                }}
              />
              <div className="flex gap-[15px] mt-[10px]">
                {testImage.map((src, idx) => (
                  <img
                    key={`img-${idx}`}
                    src={src}
                    alt="Preview"
                    className="w-[50px] h-[50px] rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white px-[40px] py-[8px] rounded-lg"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Create Order"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderEntry;
