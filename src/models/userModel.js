// src/models/userModel.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePic:{ type: String, required: true },
  phoneNumber:{type: Number,required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  otp: String,
  otpExpiry: Date,
}, 
{
  timestamps: true  // This adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
