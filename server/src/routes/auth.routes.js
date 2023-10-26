// import { register } from "../controller/auth/auth.controller";
const { register, login } = require("../controller/auth/auth.controller");
const { createNewRouter } = require("../utils/express");

const routeAuth = createNewRouter();
routeAuth.post("/register/", register);
routeAuth.post("/login/", login);
module.exports = {
  routeAuth,
};
