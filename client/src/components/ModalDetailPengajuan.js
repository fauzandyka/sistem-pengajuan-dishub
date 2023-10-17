import { useContext, useEffect, useRef } from "react";
import { BsChevronRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";

const ModalDetailPengajuan = () => {
  const { setStatus, status } = useContext(ModalContext);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !event.target.classList.contains("open-modal-button")
      ) {
        setStatus(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setStatus]);
  return (
    <div className="absolute top-0 backdrop-blur-sm w-[100vw] h-[100vh]">
      <div className="flex flex-row h-full justify-center items-center">
        <div className="w-full flex justify-center mt-20 mb-20">
          <div
            className="flex flex-col w-[80%] md:w-[60%] gap-2"
            ref={modalRef}
          >
            <div className="text-white bg-indigo-900 w-full border-2 border-white flex flex-row">
              <section className="flex flex-col py-[5.5rem] px-[2.24rem]">
                <img src={require("../images/contoh.png")} alt="" />
              </section>
              <section className="flex flex-col text-lg md:text-xl  text-center py-[5.5rem] px-[2.24rem]">
                <p className="font-bold">Keterangan</p>
                <div className="border-[1px] border-white p-4">
                  <p>Tanggal Pengajuan</p>
                  <p>11/07/2023</p>
                </div>
                <div className="border-[1px] border-white p-4">
                  <p>Jenis Perbaikan:</p>
                  <p>Tune up, service, service pasang.</p>
                </div>
                <div className="flex flex-col-reverse h-full items-center">
                  <div className="w-[80%] bg-[#4DE34A] rounded-md">
                    <button className="p-2">Download PDF</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailPengajuan;
