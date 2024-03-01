// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const loginController = require('../authLogin/controller/loginController');

// Route for creating a new user
router.post('/login',loginController.login );

module.exports = router;
