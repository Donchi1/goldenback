import React, { useState, useEffect } from "react";

export const adminContext = React.createContext();

function AdminProvider({ children }) {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark"))?.dark
  );
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (dark) {
      return document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <adminContext.Provider
      value={{
        dark,
        setDark,
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

export default AdminProvider;
