const {
  getAllKendaraan,
  createKendaraan,
  searchKendaraan,
} = require("../controller/kendaraan.controller");
const { createNewRouter } = require("../utils/express");
const kendaraanRoute = createNewRouter();

kendaraanRoute.get("/", getAllKendaraan);
kendaraanRoute.post("/", createKendaraan);
kendaraanRoute.get("/search", searchKendaraan);
module.exports = kendaraanRoute;
