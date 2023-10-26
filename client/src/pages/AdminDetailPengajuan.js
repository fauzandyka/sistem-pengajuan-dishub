import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  fetchDataFromApi,
  postDataToApi,
  putDataToApi,
} from "../utils/fetchApi";
const AdminDetailPengajuan = () => {
  const [JenisPerbaikan, setJenisPerbaikan] = useState(true);
  const [loading, setLoading] = useState(false);
  const state = useLocation();
  const navigate = useNavigate();

  const handleDiterima = (e) => {
    e.preventDefault();
    setLoading(true);
    putDataToApi(`/perbaikan/detail/${state.state.id}`, { status: "SELESAI" })
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          navigate(-1);
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };

  const handelDitolak = (e) => {
    e.preventDefault();
    setLoading(true);

    putDataToApi(`/perbaikan/detail/${state.state.id}`, { status: "DITOLAK" })
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          navigate(-1);
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };
  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <div className="flex flex-col w-[80%] md:w-[60%] gap-2">
        <Link
          to={".."}
          className="text-white items-center tracking-wider font-semibold flex flex-row gap-[15px]"
        >
          <img
            className="h-[30px]"
            src={require("../images/back_button_icon.png")}
          />
          <p>Kembali</p>
        </Link>
        <div className="text-white bg-indigo-900 w-full border-2 border-white">
          <section className="flex text-lg md:text-2xl justify-center mt-5 font-bold">
            <p>Detail Pengajuan</p>
          </section>
          <section className="flex flex-col gap-5 px-5 mt-10 md:mt-20">
            <div className="flex flex-col gap-1">
              <p className="text-xs ">Jenis Perbaikan</p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <input
                  className="w-full p-2 ml-2 text-xs"
                  placeholder="Pilih Perbaikan"
                  value={state ? state.state.jenisKerusakan.name : ""}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs ">
                Perbaikan Lainnya<br></br>
                <span className="italic"> *opsional</span>
              </p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <input
                  className="w-[80%] p-2 ml-2 text-xs"
                  placeholder="Ketik Disini"
                  value={state ? state.state.kerusakanLainnya : ""}
                />
              </div>
            </div>
          </section>
          <section className="w-full mt-20 mb-10 flex flex-row gap-5 px-5 justify-end">
            <div className="flex flex-row gap-5">
              <button onClick={handelDitolak}>
                <div className="bg-[#CA463D] pt-2 pb-2 pl-5 pr-5 rounded-2xl">
                  Tolak
                </div>
              </button>
              <button onClick={handleDiterima}>
                <div className="bg-[#1FD069] pt-2 pb-2 pl-5 pr-5 rounded-2xl">
                  Diterima
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
      {loading ? (
        <>
          <div className="absolute top-0 backdrop-blur-sm w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="mx-auto text-3xl font-bold animate-pulse">
              LOADING
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminDetailPengajuan;
