export type Inputs = {
  industyName: string;
  email: string;
  contactNo: string;
  address: string;
  ownerName: string;
  password: string;
};

export type TDoctors = {
  name: string;
  degree: string;
  addrese: string;
  email: string;
  gender: string;
  contactNo: string;
  password: string;
};

export type TReport = {
  pasentId: string;
  pasentName: string;
  age: number;
  gender: string;
  refDoctor: string;
  history: string;
};

export type TRefDoctor = {
  refDoctor: string;
  clientId: string;
};
