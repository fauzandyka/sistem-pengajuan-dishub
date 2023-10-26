import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { fetchDataFromApi, postDataToApi } from "../utils/fetchApi";
import ModalDetailPengajuan from "../components/ModalDetailPengajuan";
const DetailPengajuan = () => {
  const [JenisPerbaikan, setJenisPerbaikan] = useState(true);
  const [jenisKerusakan, setJenisKerusakan] = useState([]);
  const [kersuakanLainnya, setkersuakanLainnya] = useState("");
  const [choice, setChoice] = useState();
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);
  const data = useLocation();

  useEffect(() => {
    fetchDataFromApi("/kerusakan")
      .then((response) => {
        setJenisKerusakan(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    setForm({
      id_kendaraan: data.state.data.id,
      kerusakan: choice.id,
      kersuakanLainnya: kersuakanLainnya,
    });

    setLoading(true);
    postDataToApi("/perbaikan", form)
      .then((response) => {
        // Successful response
        setTimeout(() => {
          setLoading(false); // Turn off the loading state
          console.log(response);
        }, 3000); // 5000 milliseconds (5 seconds)
      })
      .catch((error) => {
        // Error occurred
        setLoading(false);
        // Handle the error, e.g., show an error message to the user
        console.log("Error posting data:", error);
      });
  };

  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <div className="flex flex-col w-[80%] md:w-[60%] gap-2">
        <Link
          to={"/"}
          className="text-white items-center tracking-wider font-semibold flex flex-row gap-[15px]"
        >
          <img
            className="h-[30px]"
            src={require("../images/back_button_icon.png")}
            alt=""
          />
          <p>Kembali</p>
        </Link>
        <div className="text-white bg-indigo-900 w-full border-2 border-white">
          <section className="flex text-lg md:text-2xl justify-center mt-5 font-bold">
            <p>Ajukan Perbaikan</p>
          </section>
          <section className="flex flex-col gap-5 px-5 mt-10 md:mt-20">
            <div className="flex flex-col gap-1">
              <p className="text-xs ">Silakan Pilih Jenis Perbaikan</p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <p className="w-full p-4 ml-2 text-xs">
                  {choice ? choice.name : ""}
                </p>

                <div className="flex flex-row md:gap-5 gap-1 mr-2">
                  <div>
                    <RxCross2 />
                  </div>
                  <div className="w-[2px] bg-black"></div>
                  <div onClick={() => setJenisPerbaikan(!JenisPerbaikan)}>
                    {JenisPerbaikan ? <BsChevronRight /> : <BsChevronDown />}
                  </div>
                </div>
              </div>
              <ul
                className={`${
                  JenisPerbaikan ? "hidden" : "flex"
                } pl-[14px] font-semibold flex-col text-black w-full max-h-[252px] overflow-scroll bg-white rounded-md`}
              >
                {!jenisKerusakan ? (
                  <li></li>
                ) : (
                  jenisKerusakan.map((data) => (
                    <li
                      key={data.id}
                      value={data.id}
                      onClick={() =>
                        setChoice({ name: data.name, id: data.id })
                      }
                    >
                      {data.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs ">
                Tambahkan Perbaikan Lainnya<br></br>
                <span className="italic">
                  {" "}
                  *apabila pilihan anda tidak terdaftar
                </span>
              </p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <input
                  className="w-[80%] p-2 ml-2 text-xs"
                  placeholder="Ketik Disini"
                  value={kersuakanLainnya}
                  onChange={(e) => setkersuakanLainnya(e.target.value)}
                />
              </div>
            </div>
          </section>
          <section className="w-full mt-20 mb-10 flex flex-row gap-5 px-5 justify-between">
            <p className="text-xs flex flex-row items-center gap-5">
              Jenis perbaikan yang saya masukkan sudah benar{" "}
              <input className="mt-1" type="checkbox" />
            </p>

            <img
              className="h-[30px]"
              src={require("../images/next_button_icon.png")}
              alt=""
              onClick={handelSubmit}
            />
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

export default DetailPengajuan;
