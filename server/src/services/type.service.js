const { database } = require("../utils/database");

const getAll = () => {
  return database.type.findMany({});
};

const create = (name) => {
  return database.type.create({
    data: {
      name,
    },
  });
};

module.exports = { getAll, create };
