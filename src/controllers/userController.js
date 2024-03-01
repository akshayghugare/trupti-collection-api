// src/controllers/userController.js
const userService = require('../services/userService');
const httpStatus = require("http-status");
const { sendResponse } = require('../utils/responseHandler');

// Controller for creating a new user
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req, res);
    if (newUser) {
      return sendResponse(res, httpStatus.CREATED, "User created successfully", newUser);
    } else {
      return sendResponse(res, httpStatus.BAD_REQUEST, "Unable to create user", null);
    }
  } catch (error) {
    console.error("Error in createUser:", error.message);
    return sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR,  error.message , null);
  }
};

module.exports = {
  createUser,
}