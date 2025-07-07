/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { xrayNames } from "../needJson/test";
import type { TReport } from "../types/allTypes";
import { useSendReportMutation } from "../redux/report/sendReport";

const OrderEntry = () => {
  const [reportSend, { data, isError }] = useSendReportMutation(undefined);
  const [selectTest, setSelectTest] = useState<string[]>([]);
  const [toogleTest, setToogleTest] = useState<boolean>(true);
  const [testName, setTestName] = useState<string[]>([]);
  const [testImage, setTestImage] = useState<string[]>([]);
  // const [sendImage, setSendImage] = useState<unknown[]>([]);
  const fileForm = new FormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TReport>();
  const onSubmit = async (data: TReport) => {
    const fiData = fileForm.append(
      "pasentData",
      JSON.stringify({
        ...data,
        producer: selectTest,
      })
    );
    await reportSend(fiData);
    console.log(fiData);
  };

  const handelTestImage = (e: any) => {
    const filesGet = Array.from(e.target.files);

    const imageshow = filesGet.map((item) => URL.createObjectURL(item as Blob));
    setTestImage(imageshow);
    filesGet.forEach((item) => fileForm.append(`testImg`, item as Blob));
  };
  const handelChange = (procud: string) => {
    if (procud === "x-ray") {
      setTestName(xrayNames);
    } else {
      setTestName(["ECG"]);
    }
  };
  console.log(data, isError);
  useEffect(() => {
    setTestName(xrayNames);
  }, []);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="font-bold text-2xl my-[20px]">Order Entry</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[80%] mx-auto border rounded-lg p-[10px]">
              <div className="mb-[10px]">
                <div className="flex justify-between items-center gap-[30px]">
                  <h2 className="font-bold border p-[8px] rounded-lg flex-1">
                    The Popular Diagnostic Center
                  </h2>
                  <button className="bg-gray-700 px-[30px] py-[8px] text-white rounded-lg">
                    New Doctor Entry
                  </button>
                </div>
              </div>
              <div className="mb-[10px]">
                <div>
                  <label className="block" htmlFor="pasentId">
                    Pasent Id :{" "}
                  </label>
                  <input
                    {...register("pasentId", { required: true })}
                    className="focus:outline-none border p-[6px] rounded-lg"
                    type="text"
                    placeholder="Pasent Id"
                  />
                  {errors.pasentId && <span>This field is required</span>}
                </div>
              </div>
              <div className="flex justify-between items-center gap-[30px] mb-[10px]">
                <div className="flex-1">
                  <label htmlFor="pName">Pasent Name : </label>
                  <input
                    {...register("pasentName", { required: true })}
                    type="text"
                    placeholder="Pasent Name"
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                  />
                  {errors.pasentName && <span>This field is required</span>}
                </div>
                <div className="flex-1">
                  <label htmlFor="age">Age : </label>
                  <input
                    {...register("pasentAge", { required: true })}
                    type="number"
                    placeholder="Pasent Age"
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                  />
                  {errors.pasentAge && <span>This field is required</span>}
                </div>
                <div className="flex-1">
                  <label htmlFor="age">Gender : </label>
                  <select
                    {...register("pasentGender", { required: true })}
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                    name=""
                    id=""
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.pasentGender && <span>This field is required</span>}
                </div>
              </div>
              <div className="flex justify-between items-center gap-[30px] mb-[10px]">
                <div className="flex-1">
                  <label htmlFor="refby">Ref By:</label>
                  <input
                    {...register("refDoctor", { required: true })}
                    type="text"
                    placeholder="Ref By Dr."
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                  />
                  {errors.refDoctor && <span>This field is required</span>}
                </div>
                <div className="flex-1 relative">
                  <label htmlFor="procuder">Procuder :</label>
                  <div
                    className="border rounded-lg p-[6px] cursor-pointer"
                    onClick={() => setToogleTest(!toogleTest)}
                  >
                    {selectTest?.length > 0
                      ? selectTest.map((item) => <span> {item},</span>)
                      : "Select Your Procuder"}
                  </div>
                  <div
                    className={`rounded-lg p-[6px] shadow-lg absolute w-full h-[200px]  border bg-white  ${
                      toogleTest ? "hidden" : ""
                    }`}
                  >
                    <div>
                      <input
                        className="p-[3px] focus:outline-none rounded-lg mb-[10px] border"
                        type="text"
                        placeholder="Search Your Producer"
                      />
                    </div>
                    <div className="absolute overflow-scroll h-[150px] bg-white">
                      {testName &&
                        testName?.map((item, idx) => (
                          <span key={`tdsc${idx}`}>
                            <input
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectTest([
                                    ...selectTest,
                                    e.target.value,
                                  ]);
                                } else {
                                  const textFi = selectTest.filter(
                                    (item) => item !== e.target.value
                                  );
                                  setSelectTest(textFi);
                                }
                              }}
                              type="checkbox"
                              value={item}
                            />{" "}
                            {item} <br />
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="modality">Modality :</label>
                  <select
                    onChange={(e) => handelChange(e.target.value)}
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                    name=""
                    id=""
                  >
                    <option value="x-ray">X-Ray</option>
                    <option value="ecg">ECG</option>
                    <option value="ctscan">CT-Scab</option>
                    <option value="mri">MRI</option>
                  </select>
                </div>
              </div>
              <div className="">
                <div className="flex-1">
                  <label htmlFor="history">History</label>
                  <textarea
                    {...register("pasentHistory", { required: true })}
                    className="focus:outline-none border p-[6px] w-full rounded-lg"
                    placeholder="History..."
                  ></textarea>
                  {errors.pasentHistory && <span>This field is required</span>}
                </div>
              </div>
              <div className="mt-[10px] flex justify-between items-center">
                <div className="flex-1">
                  <input onChange={handelTestImage} type="file" multiple />
                  <div className="flex items-center gap-[25px] my-[10px]">
                    {testImage.map((item) => (
                      <img
                        className="w-[50px] h-[50px] rounded-lg"
                        src={item}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-gray-700 text-white px-[40px] py-[8px] rounded-lg">
                    Create Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderEntry;
