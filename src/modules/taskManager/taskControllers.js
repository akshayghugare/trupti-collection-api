const taskServices = require('./taskServices');
const httpStatus = require("http-status");
const { sendResponse } = require('../../utils/responseHandler');

// Controller for creating a new user
const createTask = async (req, res) => {
  try {
    const newUser = await taskServices.createTask(req, res);
    if (newUser) {
      return sendResponse(res, httpStatus.CREATED, "Task created successfully", newUser);
    } else {
      return sendResponse(res, httpStatus.BAD_REQUEST, "Unable to create task", null);
    }
  } catch (error) {
    console.error("Error in createTask:", error.message);
    return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR,  error.message , null);
  }
};

module.exports = {
  createTask,
}