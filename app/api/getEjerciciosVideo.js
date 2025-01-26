import { ENV } from "../utils";


// src/api/getEjercicioConVideo.js
export const getEjercicioConVideo = async (exerciseId) => {
  try {
    const url = `${ENV.API_BASE_URL}/api/ejercicios/${exerciseId}?populate=videoURL`; // Asegura que se incluye 'videoURL'

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer 44933b6346e71a6c3d6795edac96c26f50856013f16167d0ab177c0c9725c0a5148981d6615128baa5d8fb89269f1c27abce6641cd993ccae5eb2f34498cff75c28948427e0d70275a34032ae14066958d68c9c5481e169422fe41f9514661269478157928fd76b5b9985d6488c2908ebdf6f9bdf7c312cb600708499b220f4b`,
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
