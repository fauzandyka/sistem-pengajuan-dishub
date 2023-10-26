import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContex";

function Loginpage() {
  const { login, status } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  if (status) {
    navigate("/");
  }

  const handleLogin = () => {
    login(data);
  };
  return (
    <div className="w-full flex justify-center mt-20 mb-20">
      <div className="flex flex-col w-[80%] md:w-[60%] gap-2">
        <div className="text-white bg-[rgba(88, 130, 193, 0.28)] w-full border-2 border-white rounded-[40px]">
          <section className="flex text-lg md:text-2xl font-bold m-[1.44rem]">
            <Link
              to={"/"}
              className="text-white items-center tracking-wider font-semibold flex flex-row gap-[15px]"
            >
              <img
                src={require("../images/back_button_icon.png")}
                alt="back_button"
              />
            </Link>
          </section>
          <section className="flex flex-col gap-5 ml-[2rem] mr-[2rem] md:ml-[5.87rem] md:mr-[6rem] mb-[5.25rem]">
            <h1 className="font-semibold text-2xl">Login</h1>
            <div className="flex flex-col gap-1">
              <p className="text-xs ">Email</p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <input
                  className="md:w-[80%] p-2 ml-2 text-xs"
                  placeholder="username@gmail.com"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs ">Password</p>
              <div className="flex flex-row justify-between text-black w-full bg-white rounded-md items-center">
                <input
                  className="md:w-[80%]  p-2 ml-2 text-xs"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  type="password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-[4.75rem]">
              <div className="flex flex-row justify-center text-white w-full bg-[#9454D9] rounded-md items-center">
                <button onClick={handleLogin} className="p-1 text-lg font-bold">
                  Sign In
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
