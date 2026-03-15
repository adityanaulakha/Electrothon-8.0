import React, { createContext, useState, useEffect, useContext } from 'react';
export const AuthContext = createContext({});
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => { const storedUser = localStorage.getItem('trynex_user'); if (storedUser) setUser(JSON.parse(storedUser)); }, []);
  const login = (email) => { const u = { email }; setUser(u); localStorage.setItem('trynex_user', JSON.stringify(u)); };
  const logout = () => { setUser(null); localStorage.removeItem('trynex_user'); };
  return (<AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>);
}
export const useAuth = () => useContext(AuthContext);
