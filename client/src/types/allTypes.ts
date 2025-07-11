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
  pasentAge: number;
  pasentGender: string;
  refDoctor: string;
  pasentHistory: string;
};
