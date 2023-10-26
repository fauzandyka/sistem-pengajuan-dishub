import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from "axios";

export const UserContext = createContext({
  status: Boolean,
  accessToken: "",
  refreshToken: "",
  login: async () => {},
  logout: async () => {},
});

export default function UserProvider({ children }) {
  const [status, setStatus] = useState(false);
  const [authData, setAuthData] = useState({
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setStatus(true);
    }
  }, [authData, status]);

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: data.email,
        password: data.password,
      });
      if (response) {
        sessionStorage.setItem("accessToken", response.data.accessToken);
        setAuthData({
          accessToken: response.data.accessToken,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ login: handleLogin, status }}>
      {children}
    </UserContext.Provider>
  );
}
