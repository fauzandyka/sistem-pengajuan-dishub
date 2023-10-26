const { database } = require("../utils/database");

const create = async (args) => {
  const { id_kendaraan, kerusakan, kersuakanLainnya } = args;
  console.log(args);
  return database.detail.create({
    data: {
      kerusakanLainnya: kersuakanLainnya,
      kendaraan: {
        connect: {
          id: id_kendaraan,
        },
      },
      jenisKerusakan: {
        connect: {
          id: kerusakan,
        },
      },
    },
    include: {
      jenisKerusakan: true,
      kendaraan: true,
    },
  });
};

const getAll = () => {
  return database.detail.findMany({
    include: {
      jenisKerusakan: true,
      kendaraan: true,
    },
  });
};

const searchById = (idKendaraan) => {
  return database.detail.findMany({
    where: {
      idKendaraan: parseInt(idKendaraan),
    },
    include: {
      jenisKerusakan: true,
    },
  });
};

const changeStatus = (id, status) => {
  return database.detail.update({
    where: {
      id: parseInt(id),
    },
    data: {
      status: status,
    },
  });
};

module.exports = { create, getAll, searchById, changeStatus };

// idKendaraan: id_kendaraan,
// idMerk: id_merk,
// idJenis: id_jenis,
// idType: id_type,
