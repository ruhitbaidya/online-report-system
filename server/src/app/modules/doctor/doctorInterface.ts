export type TDoctors = {
  name: string;
  degree: string;
  addrese: string;
  email: string;
  address: string;
  gender: "male" | "female" | "others";
  contactNo: string;
  profileImage?: string;
  password: string;
  role: "doctor";
  isDelete: boolean;
};
