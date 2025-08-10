import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type TReport = {
  report: string[];
};
const initialState: TReport = {
  report: [],
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    reportSetup: (state, action: PayloadAction<string>) => {
      state.report.push(action?.payload);
    },
  },
});

export const { reportSetup } = reportSlice.actions;
