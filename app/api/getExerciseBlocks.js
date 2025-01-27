import { ENV } from "../utils";

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("Token encontrado: " + token);
    // Usar el token aquí o enviarlo en solicitudes
  } else {
    console.log("Token no encontrado, redirigiendo a login");
    router.push("/login"); // Redirigir si no hay token
  }
}, []);

export const getExerciseBlocks = async () => {
  try {
    if (!token) {
      throw new Error("Falta el token de autenticación");
    }

    const response = await fetch(`${ENV.API_BASE_URL}/api/rutinas`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Utiliza el token dinámico aquí
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

