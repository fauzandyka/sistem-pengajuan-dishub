const { search } = require("../routes/perbaikan.routes");
const {
  create,
  getAll,
  searchById,
  changeStatus,
} = require("../services/perbaikan.service");
const { sendErrorResponse, sendSuccessResponse } = require("./base.controller");

const createPerbaikan = async (req, res) => {
  try {
    const { id_kendaraan, kerusakan, kersuakanLainnya } = req.body;
    console.log({ id_kendaraan, kerusakan, kersuakanLainnya });
    if (!id_kendaraan || !kerusakan) {
      sendErrorResponse(res, 401, "Must provide all data");
    }
    const perbaikan = await create({
      id_kendaraan,
      kerusakan,
      kersuakanLainnya,
    });
    sendSuccessResponse(
      res,
      {
        data: perbaikan,
      },
      201
    );
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, error);
  }
};

const getAllPerbaikan = async (req, res) => {
  try {
    const data = await getAll();
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

const searchPerbaikanById = async (req, res) => {
  try {
    const { idKendaraan } = req.params;
    if (!idKendaraan) {
      sendErrorResponse(res, 401, "Must provide all data");
    }
    const data = await searchById(idKendaraan);
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

const changeStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!id || !status) {
      sendErrorResponse(res, 401, "Must provide all data");
    }
    const data = await changeStatus(id, status);
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, "Failed to update status");
  }
};

module.exports = {
  createPerbaikan,
  getAllPerbaikan,
  searchPerbaikanById,
  changeStatusById,
};
