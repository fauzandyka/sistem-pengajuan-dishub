// import { register } from "../controller/auth/auth.controller";
const { register } = require("../controller/auth/auth.controller");
const { route } = require("../utils/express");

const routeAuth = route;
routeAuth.post("/register/", register);

module.exports = {
  routeAuth,
};
