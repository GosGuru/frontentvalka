"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { loginUser, getMe } from "../api/auth";
import { ENV } from "../utils";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(ENV.TOKEN);
    if (token) {
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const validateToken = async (token) => {
    try {
      const userData = await getMe(token);
      setToken(token);
      setUser(userData);
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const { jwt } = await loginUser({ identifier: email, password });
      localStorage.setItem(ENV.TOKEN, jwt);
      validateToken(jwt);
    } catch (error) {
      throw new Error("Credenciales incorrectas");
    }
  };

  const logout = () => {
    localStorage.removeItem(ENV.TOKEN);
    setToken(null);
    setUser(null);
  };

  const data = {
    user,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={data}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
