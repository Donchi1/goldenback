import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logout = () => {
    setUser({});
    localStorage.removeItem("user");
    window.location.reload();
  };
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
