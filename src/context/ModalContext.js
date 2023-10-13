import { createContext, useState } from "react";

export const ModalContext = createContext({
  status: Boolean,
  data: "",
  setStatus: async () => {},
  setData: async () => {},
});

export default function ModalProvider({ children }) {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState();
  return (
    <ModalContext.Provider value={{ status, data, setStatus, setData }}>
      {children}
    </ModalContext.Provider>
  );
}
