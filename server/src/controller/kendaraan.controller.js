const {
  create,
  getKendaraan,
  search,
} = require("../services/kendaraan.service");
const { sendErrorResponse, sendSuccessResponse } = require("./base.controller");

const getAllKendaraan = async (req, res) => {
  try {
    const data = await getKendaraan();
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

const createKendaraan = async (req, res) => {
  try {
    const {
      platKendaraan,
      nomorRangka,
      nomorMesin,
      namaPemegang,
      tahun,
      id_merk,
      id_jenis,
      id_type,
    } = req.body;
    console.log(req.body);
    if (
      !platKendaraan ||
      !nomorRangka ||
      !nomorMesin ||
      !namaPemegang ||
      !tahun ||
      !id_merk ||
      !id_jenis ||
      !id_type
    ) {
      sendErrorResponse(res, 401, "Must provide all data");
    }
    const data = await create(req.body);
    sendSuccessResponse(res, { data: data }, 201);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, "Fail Create Data");
  }
};

const searchKendaraan = async (req, res) => {
  try {
    const { nomorKendaraan } = req.query;
    if (!nomorKendaraan) {
      sendErrorResponse(res, 401, "Must provide all data");
    }
    const data = await search(nomorKendaraan);
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, "Fail Create Data");
  }
};

module.exports = { createKendaraan, getAllKendaraan, searchKendaraan };
