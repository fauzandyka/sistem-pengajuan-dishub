const { getAll, create } = require("../services/kerusakan.service");
const { database } = require("../utils/database");
const { sendSuccessResponse, sendErrorResponse } = require("./base.controller");

const getAllJenisKerusakan = async (req, res) => {
  try {
    const data = await getAll();
    sendSuccessResponse(res, { data: data }, 200);
  } catch (error) {
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

const createJenisKerusakan = async (req, res) => {
  try {
    const { kerusakan } = req.body;
    if (!kerusakan) {
      sendErrorResponse(res, 401, "Kerusakan Name not Provided");
      return;
    }
    const data = await create(kerusakan);
    sendSuccessResponse(res, { data: data }, 201);
  } catch (error) {
    sendErrorResponse(res, 500, "Fail Retrived Data");
  }
};

module.exports = { getAllJenisKerusakan, createJenisKerusakan };
