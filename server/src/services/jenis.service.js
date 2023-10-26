const { database } = require("../utils/database");

const getAll = () => {
  return database.jenis.findMany({});
};
const create = (name) => {
  return database.jenis.create({
    data: {
      name,
    },
  });
};

module.exports = { getAll, create };
