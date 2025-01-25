import { ENV } from "../utils";

export const getExerciseBlocks = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Falta el token de autenticación");
    }

    const response = await fetch(`${ENV.API_BASE_URL}/api/rutinas`, {
      headers: {
        Authorization: `Bearer ${"44933b6346e71a6c3d6795edac96c26f50856013f16167d0ab177c0c9725c0a5148981d6615128baa5d8fb89269f1c27abce6641cd993ccae5eb2f34498cff75c28948427e0d70275a34032ae14066958d68c9c5481e169422fe41f9514661269478157928fd76b5b9985d6488c2908ebdf6f9bdf7c312cb600708499b220f4b"}`,
        "Content-Type": "application/json",
      },
    });



    if (!response.ok) {
      const errorData = await response.json();
      console.error("Detalles del error:", errorData);
      throw new Error("Error al obtener los bloques de ejercicios");
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error capturado:", error.message);
    return [];
  }
};
