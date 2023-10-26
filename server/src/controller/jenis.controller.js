const { getAll, create } = require("../services/jenis.service");
const { sendErrorResponse, sendSuccessResponse } = require("./base.controller");

const getAllJenis = async (req, res) => {
  try {
    const data = await getAll();
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};
const createJenis = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      sendErrorResponse(res, 401, "name not Provided");
      return;
    }
    const data = await create(name);
    sendSuccessResponse(res, { data: data }, 201);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

module.exports = { getAllJenis, createJenis };
