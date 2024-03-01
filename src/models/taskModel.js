// src/models/userModel.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const taskSchema = new Schema({
  taskTitle: { type: String, required: true,unique: true },
  status  : { type: String, required: true },
  priority  : { type: String, required: true },
  createdBy: { type: mongoose.isValidObjectId },
  assignedTo:{type: mongoose.isValidObjectId},
  profilePic: { type: String, required: true },
  description: { type: String, }
}, 
{
  timestamps: true  // This adds createdAt and updatedAt fields
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;
