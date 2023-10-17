const { database } = require("../utils/database");
const { hashToken } = require("../utils/hashToken");

const addRefreshTokenToWhiteList = ({ jti, refreshToken, userId }) => {
  return database.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

const findRefreshTokenById = (id) => {
  return database.refreshToken.findUnique({
    where: {
      id,
    },
  });
};

const deleteRefreshToken = (id) => {
  return database.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true,
    },
  });
};
const revokeToken = (userId) => {
  return database.refreshToken.updateMany({
    where: {
      userId,
    },
    data: {
      revoked: true,
    },
  });
};

module.exports = {
  addRefreshTokenToWhiteList,
  deleteRefreshToken,
  revokeToken,
  findRefreshTokenById,
};
