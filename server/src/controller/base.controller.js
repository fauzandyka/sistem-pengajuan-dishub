const sendSuccessResponse = (res, data, status) => {
  res.status(status).json(data);
};

const sendErrorResponse = (res, status, message) => {
  res.status(status).json(message);
};

module.exports = { sendSuccessResponse, sendErrorResponse };
