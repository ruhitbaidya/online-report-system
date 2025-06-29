import catchAsyncFun from "../../utils/catchAsyncFunc";
import sendReponse from "../../utils/sendResponse";


const createUser = catchAsyncFun(async(req, res)=>{
    const resData = req.body;
    const result = {}
    return sendReponse(res, {success : true, message : "User Create Successfull", status : 200, data : result})
});


export const userControler = {
    createUser
}