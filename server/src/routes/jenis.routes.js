const { createJenis, getAllJenis } = require("../controller/jenis.controller");
const { createNewRouter } = require("../utils/express");

const jenisRoute = createNewRouter();
jenisRoute.post("/", createJenis);
jenisRoute.get("/", getAllJenis);
module.exports = jenisRoute;
