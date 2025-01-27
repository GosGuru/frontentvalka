import { ENV } from "../utils";


// src/api/getEjercicioConVideo.js
export const getEjercicioConVideo = async (exerciseId) => {
  try {
        const token = localStorage.getItem("token");  // Obtener el token dinámicamente
    if (!token) {
      throw new Error("Falta el token de autenticación");
    }
    const url = `${ENV.API_BASE_URL}/api/ejercicios/${exerciseId}?populate=videoURL`; // Asegura que se incluye 'videoURL'
    console.log(url);
    const response = await fetch(url, {
      headers: {
      Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el ejercicio con video.");
    }

    const data = await response.json();
    return data.data || {}; // Devuelve el ejercicio o un objeto vacío
  } catch (error) {
    console.error("Error en getEjercicioConVideo:", error);
    throw error;
  }
};
