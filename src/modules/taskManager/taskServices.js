const httpStatus = require('http-status');
const task = require('../../models/taskModel');
const { sendResponse } = require('../utils/responseHandler');

// Create a new task
const createTask = async (req, res) => {
    const { taskTitle, status, priority, createdBy, assignedTo, profilePic, description } = req.body;
    try {
        const taskData = {
            taskTitle: taskTitle,
            status: status,
            priority: priority,
            createdBy: createdBy,
            assignedTo: assignedTo,
            profilePic: profilePic,
            description: description
        }
        const newtask = new task(taskData);
        const savedtask = await newtask.save();
        if (savedtask) {
            return savedtask
        } else {
            sendResponse(res, httpStatus.BAD_REQUEST, "Unable to create task", null);
        }

    } catch (error) {
        sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, 'Error saving the task.', null);
        // Log the error for debugging
        console.error('Error in createTask:', error);
    }
};


module.exports = {
    createTask,
}