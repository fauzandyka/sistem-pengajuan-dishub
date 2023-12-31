import { Form, Link } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ModalDetailPengajuan from "../components/ModalDetailPengajuan";
import { useContext, useEffect, useState } from "react";
import ModalProvider, { ModalContext } from "../context/ModalContext";

const data = [
  {
    nomor_kendaraan: "KT 51989 PO",
    tanggal_pengajuan: "11/07/2023",
    jenis_perbaikan: "Ganti Oli,Tune up,service,service pasang",
    status: "Disetujui",
  },
  {
    nomor_kendaraan: "KT 51989 PO",
    tanggal_pengajuan: "11/07/2023",
    jenis_perbaikan: "Ganti Oli,Tune up,service,service pasang",
    status: "Prosess",
  },
  {
    nomor_kendaraan: "KT 51989 PO",
    tanggal_pengajuan: "11/07/2023",
    jenis_perbaikan: "Ganti Oli,Tune up,service,service pasang",
    status: "Ditolak",
  },
];

const UserDetailPengajuan = () => {
  const { setStatus, status } = useContext(ModalContext);

  useEffect(() => {}, [status]);

  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <div className="flex flex-col gap-2 border-2 border-white pl-10 pr-10 pb-20 pt-2 rounded-md mr-10 ml-10">
        <h1 className="text-white font-semibold text-2xl">
          Detail Pengajuan: KT 1234 BR
        </h1>
        <div className="text-white bg-[rgba(255, 255, 255, 1)]  border-2 border-white">
          <div className="my-4 mx-auto max-w-screen-lg">
            <table className="table-auto w-full">
              <thead>
                <tr className="border-b-2 border-white">
                  <th className="p-[1.4rem]">No</th>
                  <th className="p-[1.4rem]">Tanggal Pengajuan</th>
                  <th className="p-[1.4rem]">Jenis Perbaikan</th>
                  <th className="p-[1.4rem]">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr
                    key={index}
                    className="text-center border-b-2 border-white"
                  >
                    <td className="border-r-2 border-white">{index + 1}</td>
                    <td className="border-r-2 border-white">
                      {value.tanggal_pengajuan}
                    </td>
                    <td className="border-r-2 border-white">
                      {value.jenis_perbaikan}
                    </td>
                    <td
                      onClick={() => setStatus(true)}
                      className="p-3 flex flex-row justify-center cursor-pointer open-modal-button"
                    >
                      <div className="bg-[#4179F9] pt-2 pb-2 pl-8 pr-8 rounded-xl ">
                        <AiFillEye size={24} className="" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div className="w-[40%] bg-gray-400 text-white mt-2 flex flex-row justify-center gap-[1.56rem] items-center p-[0.50rem] rounded-lg">
            <BsChevronLeft />
            <p className="">1</p>
            <p>2</p>
            <p>3</p>
            <BsChevronRight />
          </div>
        </div>
      </div>
      {status ? <ModalDetailPengajuan /> : <></>}
    </div>
  );
};

export default UserDetailPengajuan;
