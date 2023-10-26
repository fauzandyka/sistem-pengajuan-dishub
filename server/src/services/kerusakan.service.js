const { database } = require("../utils/database");

const getAll = () => {
  return database.jenisKerusakan.findMany({});
};

const create = (kerusakan) => {
  return database.jenisKerusakan.create({
    data: {
      name: kerusakan,
    },
  });
};

module.exports = { getAll, create };
