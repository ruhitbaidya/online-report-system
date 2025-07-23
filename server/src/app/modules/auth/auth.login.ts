import catchAsyncFun from "../../utils/catchAsyncFunc";

const loginMethod = catchAsyncFun(async (req, res) => {
  const info = req.body;
  console.log(info);
});

export const authControler = {
  loginMethod,
};
