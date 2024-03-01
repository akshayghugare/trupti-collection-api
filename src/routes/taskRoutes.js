// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../modules/taskManager/taskControllers');

// Route for creating a new user
router.post('/create-task', taskController.createTask);

module.exports = router;
