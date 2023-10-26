import React, { useState } from "react";
import Search from "../images/search.png";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../utils/fetchApi";

function Homepage() {
  const [query, setQuery] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(result);

  const search = (e) => {
    e.preventDefault();

    // Set loading to true immediately
    setLoading(true);

    fetchDataFromApi(`/kendaraan/search?nomorKendaraan=${query}`)
      .then((response) => {
        // Simulate a 5-second loading delay
        setTimeout(() => {
          setLoading(false); // Turn off the loading state
          setResult(response.data);
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false); // Turn off the loading state
        }, 3000);
      });
  };
  return (
    <div className="w-full flex justify-center flex-col">
      <div className="text-white flex-shrink-0 flex flex-col font-poppins font-bold text-3xl md:text-4xl leading-1.5 tracking-wider mt-0.4 mb-7.6  text-center pb-20">
        <h1 className="mb-2">Pengajuan Perawatan Kendaraan</h1>
        <p>Dinas Kota Balikpapan</p>
      </div>
      <p className="text-white flex-shrink-0 font-poppins  text-1xl leading-1.5 tracking-wider mb-7.6  text-center">
        Masukkan Nomor Kendaraan
      </p>
      <div className="flex flex-row w-full  items-center justify-center">
        <div className="flex items-center">
          <div className="bg-indigo-600 border border-white w-60 shadow-md rounded-md flex items-center">
            <div className="bg-white shadow-md rounded-md px-2 py-2 ">
              <img
                className="bg-white px-1 py-1 w-10 h-8"
                src={Search}
                alt="Logo Search"
              />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full px-2 py-3 rounded-md focus:outline-none uppercase"
              placeholder="Cari..."
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white ml-1 px-4 py-3 rounded-md"
            onClick={search}
          >
            Cari
          </button>
        </div>
      </div>
      {loading ? (
        <>
          <div className="mx-auto mt-10 animate-pulse text-2xl font-bold">
            LOADING
          </div>
        </>
      ) : (
        <></>
      )}
      {result ? (
        <div className="mb-20 mx-auto text-white bg-indigo-900 border border-white border-solid rounded-2xl mt-2">
          <div className="flex px-4 py-4 ">
            <div>
              <div className="w-full max-w-[auto] min-h-[auto] pb-4 text-left">
                <p className="text-[20px] text-left font-['DM_Sans',_sans-serif] tracking-[1px]">
                  Detail Data Kendaraan
                </p>
              </div>
              <div className="w-full max-w-[auto] min-h-[auto] text-left">
                <p className="text-[12px] text-left font-['DM_Sans',_sans-serif] font-medium tracking-[1px] normal-case">
                  Nomor Kendaraan
                </p>
              </div>
              <div className="w-full mb-4 flex px-[22px] py-[7px] relative max-w-[114px] box-border items-center rounded-tl-[9px] rounded-br-[9px] rounded-tr-[9px] rounded-bl-[9px] justify-center bg-blue-800">
                <p className="text-[12px] text-left font-['DM_Sans',_sans-serif] font-normal leading-[16px] tracking-[0px] normal-case">
                  {result ? result.platKendaraan : "nomor"}
                </p>
              </div>
              <div className="w-full max-w-[auto] min-h-[auto] text-left">
                <p className="text-[12px] text-left font-['DM_Sans',_sans-serif] font-medium tracking-[1px]">
                  Pemegang Kendaraan
                </p>
              </div>
              <div className="w-full mb-4 flex px-[22px] py-[7px] relative max-w-[114px] box-border items-center rounded-tl-[9px] rounded-br-[9px] rounded-tr-[9px] rounded-bl-[9px] justify-center bg-blue-800">
                <p className="text-[12px] text-left font-['DM_Sans',_sans-serif]">
                  {result ? result.namaPemegang : "nomor"}
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse">
              <Link
                to={"/detail"}
                state={{ data: result }}
                className="w-full flex relative max-w-[114px] box-border items-center rounded-tl-[9px] rounded-br-[9px] rounded-tr-[9px] rounded-bl-[9px] justify-center my-2 bg-yellow-500 hover:bg-yellow-600"
              >
                <p className="px-2 py-2 text-[12px] text-left font-['DM_Sans',_sans-serif] font-normal leading-[16px] mb-0 tracking-[0px] normal-case">
                  Lihat Pengajuan
                </p>
              </Link>
              <Link
                to={"/formpengajuan"}
                state={{ data: result }}
                className="w-full flex relative max-w-[114px] box-border items-center rounded-tl-[9px] rounded-br-[9px] rounded-tr-[9px] rounded-bl-[9px] justify-center my-2 bg-green-500 hover:bg-green-600"
              >
                <p className="px-2 py-2 text-[12px] text-left font-['DM_Sans',_sans-serif]">
                  Ajukan Perbaikan
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <></>
          ) : (
            <>
              <div className="mx-auto mt-10 animate-pulse text-2xl font-bold">
                Tidak Ada Data Kendaraan
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Homepage;
