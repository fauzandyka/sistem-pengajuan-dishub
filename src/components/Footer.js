import React from "react";
import Phone from '../images/icon_call.png';
import Map from '../images/icon_map.png';
import Email from '../images/icon_email.png';
import Tim from '../images/logo_tim.png';

function Footer(){
    return(
        <div className="bg-indigo-900 shadow-md w-full  md:w-full">
            <div className="flex justify-between p-4 flex-col md:flex-row">
                <div className="md:w-1/4 p-4 text-white">
                    <h2 className="text-xl font-semibold">About Us</h2>
                    <br></br>
                    <p className="text-justify">
                        Pengajuan Perawatan Kendaraan Dinas Kota Balikpapan adalah website yang dirancang untuk 
                        memudahkan pekerja melakukan pengajuan perawatan kendaraan secara online.</p>
                </div>
                <div className="md:w-1/4 p-4 text-white">
                    <h2 className="text-xl font-semibold">Pages</h2>
                    <br></br>
                    <p className="text-left">Home</p>
                    <p className="text-left">Login as Admin</p>
                </div>
                <div className="md:w-1/4 p-4 text-white">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <br></br>
                    <ul>
                        <li>
                            <div className="flex items-center pb-1">
                                <img className="h-4 w-4" src={Phone} alt="Phone Call Icon"></img>
                                <p className="ml-4">(0542) 8514228</p>
                            </div >
                            <div className="flex items-center pb-1">
                                <img className="h-4 w-4" src={Map} alt="Map Icon"></img>
                                <p className="ml-4">Jl. Ruhui Rahayu I No. 5 Balikpapan Selatan</p>
                            </div>
                            <div className="flex items-center pb-1">
                                <img className="h-4 w-4" src={Email} alt="Email Icon"></img>
                                <p className="ml-4">dishubbalikpapan@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex w-1/4 p-4 items-center">
                    <img className="ms-auto" src={Tim} alt="Logo Tim" />
                </div>
            </div>
            <div>
                <div className="text-white text-center font-semibold">
                    <p class="text-sm">Copyright &copy; 2023 - All Rights Reserved -</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;