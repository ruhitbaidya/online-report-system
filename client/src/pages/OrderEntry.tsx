import { useEffect, useState } from "react";
import { xrayNames } from "../needJson/test";

const OrderEntry = () => {
  const [selectTest, setSelectTest] = useState<string[]>([]);
  const [toogleTest, setToogleTest] = useState<boolean>(true);
  const [testName, setTestName] = useState<string[]>([]);
  const handelChange = (procud: string) => {
    if (procud === "x-ray") {
      setTestName(xrayNames);
    } else {
      setTestName(["ECG"]);
    }
  };
  useEffect(() => {
    setTestName(xrayNames);
  }, []);
  return (
    <div>
      <div className="container mx-auto px-[20px]">
        <div>
          <h2 className="font-bold text-2xl my-[20px]">Order Entry</h2>
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
                  className="focus:outline-none border p-[6px] rounded-lg"
                  type="text"
                  placeholder="Pasent Id"
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px] mb-[10px]">
              <div className="flex-1">
                <label htmlFor="pName">Pasent Name : </label>
                <input
                  type="text"
                  placeholder="Pasent Name"
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="age">Age : </label>
                <input
                  type="number"
                  placeholder="Pasent Age"
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="age">Gender : </label>
                <select
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                  name=""
                  id=""
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center gap-[30px] mb-[10px]">
              <div className="flex-1">
                <label htmlFor="refby">Ref By:</label>
                <input
                  type="text"
                  placeholder="Ref By Dr."
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                />
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
                      testName?.map((item) => (
                        <>
                          <input
                            onChange={(e) => {
                              const fiText = selectTest?.filter(
                                (item) => item === e?.target?.value
                              );
                              if (e.target.checked) {
                                setSelectTest(fiText);
                              }
                              console.log(e.target.checked);
                              setSelectTest(fiText);
                            }}
                            type="checkbox"
                            value={item}
                          />{" "}
                          {item} <br />
                        </>
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
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                  placeholder="History..."
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex-1">
                <input type="file" multiple />
              </div>
              <div>
                <button className="bg-gray-700 text-white px-[40px] py-[8px] rounded-lg">
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEntry;
