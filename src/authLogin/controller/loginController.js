const httpStatus = require('http-status');
const loginService = require('../../authLogin/service/loginService');
const { sendResponse } = require('../../utils/responseHandler');

const login = async(req,res)=>{
    try {
        const loginUser = await loginService.login(req,res);
        if (loginUser) {
            return sendResponse(res, httpStatus.OK,"User login successfully", loginUser);
          } else {
            return sendResponse(res, httpStatus.BAD_REQUEST, "Unable to login user", null);
          }
        } catch (error) {
          console.error("Error in createUser:", error.message);
          return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR,  error.message , null);
        }
}
module.exports = {
    login
}