import { ENV } from "../utils";

export const getEjercicios = async (blockId) => {
  try {
    const url = `${ENV.API_BASE_URL}/api/rutinas/${blockId}?populate=*`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ENV.TOKEN}`,  // Token del usuario autenticado
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los ejercicios.");
    }

    const data = await response.json();
    
    // Aseguramos que 'data.data' exista y devolvemos los ejercicios o un array vacío
    return data?.data?.ejercicios || [];
  } catch (error) {
    console.error("Error en getEjercicios:", error);
    throw error;
  }
};
