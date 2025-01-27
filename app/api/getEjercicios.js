import { ENV } from "../utils";

export const getEjercicios = async (blockId) => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("Falta el token de autenticación");
    }

    const url = `${ENV.API_BASE_URL}/api/rutinas/${blockId}?populate=*`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Detalles del error:", errorData);
      throw new Error("Error al obtener los ejercicios.");
    }

    const data = await response.json();
    
    // Asegurarse de que 'data.data.ejercicios' exista y devolver un array vacío si no
    return data?.data?.attributes?.ejercicios || [];
  } catch (error) {
    console.error("Error en getEjercicios:", error.message || error);
    throw error;
  }
};
