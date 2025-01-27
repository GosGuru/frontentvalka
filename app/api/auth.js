import axios from "axios";
import { ENV } from "../utils";
    const token = localStorage.getItem("token");  // Obtener el token dinámicamente
    if (!token) {
      throw new Error("Falta el token de autenticación");
    }

const BASE_URL = ENV.API_BASE_URL;

export const registerUser = async (data) => {
  const url = `${BASE_URL}/api/users`;
  const response = await axios.post(url, data);
  return response.data;
};

export const loginUser = async (data) => {
  const url = `${BASE_URL}/auth/local`;
  const response = await axios.post(url, data);
  return response.data;
};

export const getMe = async (token) => {
  const url = `${BASE_URL}/api/users/me`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
