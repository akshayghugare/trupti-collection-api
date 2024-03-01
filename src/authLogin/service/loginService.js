
const httpStatus = require('http-status');
const User = require('../../models/userModel');
const { comparePassword } = require('../../utils/hashPassword');
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        const passwordsMatch = await comparePassword(password, user?.password);
        if (email && passwordsMatch) {
            return user;
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.error("Login error:", error.message);
        throw error;
    }
}

module.exports = {
    login
}