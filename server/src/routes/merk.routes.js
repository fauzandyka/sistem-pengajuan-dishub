const { createMerk, getAllMerk } = require("../controller/merk.controller");
const { createNewRouter } = require("../utils/express");

const merkRoute = createNewRouter();
merkRoute.post("/", createMerk);
merkRoute.get("/", getAllMerk);
module.exports = merkRoute;
