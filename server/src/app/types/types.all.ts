export type TSendResponse<T> = {
  status: number;
  success: boolean;
  message: string;
  result: T;
};
