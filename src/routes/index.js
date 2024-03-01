const express = require("express");
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  }
  
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
module.exports = router;
