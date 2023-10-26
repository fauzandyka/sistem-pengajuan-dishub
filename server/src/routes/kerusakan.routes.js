const {
  getAllJenisKerusakan,
  createJenisKerusakan,
} = require("../controller/kerusakan.controller");
const { createNewRouter } = require("../utils/express");

const kerusakanRoute = createNewRouter();
kerusakanRoute.post("/", createJenisKerusakan);
kerusakanRoute.get("/", getAllJenisKerusakan);

module.exports = kerusakanRoute;
