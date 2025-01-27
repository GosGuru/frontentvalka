import { ENV } from "../utils";
import { useRouter } from "next/router"; // Si estás usando Next.js

const router = useRouter();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("Token encontrado: " + token);
    // Aquí podrías usar el token si lo necesitas en este componente
  } else {
    console.log("Token no encontrado, redirigiendo a login");
    // router.push("/login");
  }
}, []);

export const getExerciseBlocks = async () => {
  try {
    // Obtener el token dentro de la función
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Falta el token de autenticación");
    }

    const response = await fetch(`${ENV.API_BASE_URL}/api/rutinas`, {
      headers: {
        Authorization: `Bearer ${token}`, // Utiliza el token obtenido aquí
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
