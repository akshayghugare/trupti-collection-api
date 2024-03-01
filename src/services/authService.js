const User = require('../models/userModel');
// Check email
const checkEmail = async (email) => {
  return await User.findOne({ email: email });
};
//get mobile  number
const getUserByPhoneNumber = async (phoneNumber) => {
	return User.findOne({ phoneNumber, active: true });
};




module.exports = {
  checkEmail,
  getUserByPhoneNumber
};
