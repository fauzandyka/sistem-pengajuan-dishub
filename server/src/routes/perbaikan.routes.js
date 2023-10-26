const {
  createPerbaikan,
  getAllPerbaikan,
  searchPerbaikanById,
  changeStatusById,
} = require("../controller/perbaikan.controller");
const { createNewRouter } = require("../utils/express");

const perbaikanRoute = createNewRouter();
perbaikanRoute.post("/", createPerbaikan);
perbaikanRoute.get("/", getAllPerbaikan);
perbaikanRoute.get("/detail/:idKendaraan", searchPerbaikanById);
perbaikanRoute.put("/detail/:id", changeStatusById);
module.exports = perbaikanRoute;
