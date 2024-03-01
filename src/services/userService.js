// src/services/userService.js
const httpStatus = require('http-status');
const User = require('../models/userModel');
const { sendResponse } = require('../utils/responseHandler');
const { hashPassword } = require('../utils/hashPassword');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
// Create a new user
const createUser = async (req, res) => {
  const { firstName, lastName,phoneNumber,email,age,password,profilePic } = req.body;
  try {
    const existingEmail = await User.findOne({ email: email });
    const existingPhoneNumber = await User.findOne({ phoneNumber: phoneNumber });

    if (existingEmail) {
      sendResponse(res, httpStatus.BAD_REQUEST, "User with this email already exists.", null);
      return
    } else if (existingPhoneNumber) {
      sendResponse(res, httpStatus.BAD_REQUEST, "User with this phoneNumber already exists.", null);
      return
    } else {
      const hashedPassword = await hashPassword(password);
      const userData={
         firstName:firstName,
         lastName:lastName,
         phoneNumber:phoneNumber,
         email:email,
         age:age,
         password:hashedPassword,
         profilePic:profilePic
      }
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      if (savedUser) {
        return savedUser
      } else {
        sendResponse(res, httpStatus.BAD_REQUEST, "Unable to create user", null);
      }
    }

  } catch (error) {
    sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, 'Error saving the user.', null);
    // Log the error for debugging
    console.error('Error in createUser:', error);
  }
};


module.exports = {
  createUser,
}