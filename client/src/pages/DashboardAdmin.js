import { Link } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("nomor_kendaraan", {
    header: () => "Nomor Kendaraan",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("tanggal_pengajuan", {
    header: () => "Jenis Perbaikan",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("jenis_perbaikan", {
    header: () => "Jenis Perbaikan",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

const DashboardAdmin = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <div className="flex flex-col gap-2 border-2 border-white pl-10 pr-10 pb-20 pt-2 rounded-md mr-10 ml-10">
        <h1 className="text-white font-semibold text-2xl">Daftar Pengajuan</h1>
        <div className="text-white bg-[rgba(255, 255, 255, 1)]  border-2 border-white">
          <div className="my-4 mx-auto max-w-screen-lg">
            <table className="table-auto w-full">
              <thead>
                <tr className="border-b-2 border-white">
                  <th className="p-[1.4rem]">No</th>
                  <th className="p-[1.4rem]">Nomor Kendaraan</th>
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
                    <td className="border-r-2 border-white">{index}</td>
                    <td className="border-r-2 border-white">
                      <Link to={"/admin/detail"}>{value.nomor_kendaraan}</Link>
                    </td>
                    <td className="border-r-2 border-white">
                      {value.tanggal_pengajuan}
                    </td>
                    <td className="border-r-2 border-white">
                      {value.jenis_perbaikan}
                    </td>
                    <td className="p-3">
                      <p
                        className={`${
                          value.status === "Disetujui" && "bg-[#45F941]"
                        } ${value.status === "Ditolak" && "bg-[#F94141]"}  ${
                          value.status === "Prosess" && "bg-[#737987]"
                        } p-2 rounded-xl`}
                      >
                        {value.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <tfoot className="w-full flex flex-row justify-center">
              <div className="w-[40%] bg-gray-400 mt-2 flex flex-row justify-center gap-[1.56rem] items-center p-[1.29rem] rounded-lg">
                <BsChevronLeft />
                <p className="">1</p>
                <p>2</p>
                <p>3</p>
                <BsChevronRight />
              </div>
            </tfoot>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
