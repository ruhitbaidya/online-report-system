const OrderEntry = () => {
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
              <div className="flex-1">
                <label htmlFor="modality">Modality :</label>
                <select
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                  name=""
                  id=""
                >
                  <option value="xray">X-Ray</option>
                  <option value="ecg">ECG</option>
                  <option value="ctscan">CT-Scab</option>
                  <option value="mri">MRI</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="procuder">Procuder :</label>
                <select
                  className="focus:outline-none border p-[6px] w-full rounded-lg"
                  name=""
                  id=""
                >
                  <option value="xray">Chest P/A View</option>
                  <option value="ecg">L/S Spine B/V</option>
                  <option value="ctscan">CT-Scan</option>
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
