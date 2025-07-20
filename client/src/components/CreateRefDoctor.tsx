import { useEffect, useState } from "react";
import { useCreateRefDoctorMutation } from "../redux/featchers/refDoctor/refDoctors";
type TRefDoctorsSt = {
  clientId: string;
};
const CreateRefDoctor = ({ clientId }: TRefDoctorsSt) => {
  const [createRefDoctors, { data }] = useCreateRefDoctorMutation(undefined);
  const [refDoctor, setRefDoctor] = useState<string>("");
  const [clientIds, setClientsId] = useState<string>(clientId);
  const handelDoctorAdding = async () => {
    console.log(clientIds, refDoctor);
    const info = { refDoctor, clientId: clientIds };
    await createRefDoctors(info);
  };
  console.log(data);
  useEffect(() => {
    setClientsId(clientId);
  }, [clientId]);
  return (
    <div>
      <div>
        <h2 className="font-bold text-center mb-[20px]">
          Register New Referance Doctor
        </h2>
      </div>
      <label htmlFor="hName">Doctors Name:</label>
      <input
        className="w-full p-[10px] focus:outline-none border rounded-lg mt-[10px]"
        type="text"
        placeholder="Doctor Name Degree"
        onChange={(e) => setRefDoctor(e.target.value)}
      />
      <button
        type="button"
        className="border bg-gray-700 text-white rounded-lg px-[30px] py-[8px] mt-[20px]"
        onClick={handelDoctorAdding}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateRefDoctor;
