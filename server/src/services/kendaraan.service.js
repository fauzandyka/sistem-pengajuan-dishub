const { database } = require("../utils/database");

const getKendaraan = () => {
  return database.kendaraan.findMany({
    merk: true,
    jenis: true,
    jenisKerusakan: true,
    type: true,
  });
};

const create = (args) => {
  const {
    platKendaraan,
    nomorRangka,
    nomorMesin,
    namaPemegang,
    tahun,
    id_merk,
    id_jenis,
    id_type,
  } = args;
  return database.kendaraan.create({
    data: {
      platKendaraan,
      nomorRangka,
      nomorMesin,
      namaPemegang,
      tahun: new Date(tahun),
      merk: {
        connect: {
          id: id_merk,
        },
      },
      type: {
        connect: {
          id: id_type,
        },
      },
      jenis: {
        connect: {
          id: id_jenis,
        },
      },
    },
  });
};

const search = (nomorKendaraan) => {
  return database.kendaraan.findFirstOrThrow({
    where: {
      platKendaraan: nomorKendaraan,
    },
  });
};

module.exports = { getKendaraan, create, search };
