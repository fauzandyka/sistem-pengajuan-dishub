const { createType, getAllType } = require("../controller/type.controller");
const { createNewRouter } = require("../utils/express");

const typeRoute = createNewRouter();
typeRoute.post("/", createType);
typeRoute.get("/", getAllType);
module.exports = typeRoute;
