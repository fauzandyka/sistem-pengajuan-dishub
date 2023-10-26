const { database } = require("../utils/database");

const getAll = () => {
  return database.merk.findMany({});
};

const create = (name) => {
  return database.merk.create({
    data: {
      name,
    },
  });
};

module.exports = { getAll, create };
