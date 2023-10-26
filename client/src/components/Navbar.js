import React, { useContext } from "react";
import LogoDishub from "../images/logo_dishub.png";
import LogoBalikpapan from "../images/logo_kota_balikpapan.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContex";

function Navbar() {
  const { status } = useContext(UserContext);
  return (
    <nav className="bg-gray-500 backdrop-blur-md bg-opacity-50 flex items-center justify-center  py-3 mb-3 ">
      <div className="flex flex-row w-[80%] justify-between">
        <div className=" flex items-center justify-center px-2 grow md:grow-0">
          <ul className="first-line:px-1 flex flex-row items-center  lg:flex-row list-none lg:ml-auto">
            <Link to={"https://www.balikpapan.go.id/"} className="nav-item">
              <img
                className="px-2 py-1 h-12 md:w-20 md:h-20"
                src={LogoBalikpapan}
                alt="Logo Balikpapan"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="px-3 py-1 h-12 md:w-[5.5rem] md:h-20"
                src={LogoDishub}
                alt="Logo Dishub"
              />
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          {status ? (
            <>
              <img src={require("../images/leave.png")} alt="" />
            </>
          ) : (
            <Link
              to={"login"}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded hidden md:flex"
            >
              Login as Admin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
