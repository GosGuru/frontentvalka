// api/getDays.js
export const getDays = async () => {
    const response = await fetch("/api/days"); // Ajusta la URL si es necesario
    if (!response.ok) throw new Error("Error al cargar los días");
    return response.json();
  };
  