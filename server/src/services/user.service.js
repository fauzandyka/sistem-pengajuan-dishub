const { database } = require("../utils/database");
const bcrypt = require("bcrypt");
const findUserByEmail = (email) => {
  return database.user.findUnique({
    where: {
      email,
    },
  });
};

const createUser = (user) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return database.user.create({
    data: user,
  });
};

const findUserById = (id) => {
  return database.user.findUnique({
    where: {
      id,
    },
  });
};

module.exports = { findUserByEmail, createUser, findUserById };
