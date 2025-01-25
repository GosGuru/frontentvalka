import React, { useState, useEffect } from "react";
import { getEjercicios } from "../api/getEjercicios";
import "../styles/blockDetail.css";
import { ENV } from "../utils";
import { getEjercicioConVideo } from "../api/getEjerciciosVideo";
import {
  Reorder,
  FitnessCenter,
  Timer,
} from "@mui/icons-material"; // Importamos Timer
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlockDetail = ({ block = {}, onBack }) => {
  const [exercises, setExercises] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const fetchedExercises = await getEjercicios(block.id); // Obtén todos los ejercicios del bloque
        setExercises(fetchedExercises);

        // Obtén videos para cada ejercicio
        const videoPromises = fetchedExercises.map((exercise) =>
          getEjercicioConVideo(exercise.id)
        );
        const videos = await Promise.all(videoPromises);

        // Mapea los videos a un objeto usando el ID del ejercicio como clave
        const videosMap = videos.reduce((acc, video) => {
          acc[video.id] = video.videoURL;
          return acc;
        }, {});
        setExerciseVideos(videosMap);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (block.id) {
      fetchExercises();
    } else {
      setLoading(false);
    }
  }, [block.id]);

  // Función para obtener la clase CSS según la dificultad
  const getDifficultyClass = (dificultad) => {
    switch (dificultad) {
      case "Avanzado":
        return "difficulty-advanced"; // Rojo
      case "Intermedio":
        return "difficulty-intermediate"; // Naranja
      case "Principiante":
      default:
        return "difficulty-beginner"; // Verde u otro color
    }
  };

  if (loading) return <p className="text-center text-gray-400">Cargando...</p>;
  if (error)
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
        <button onClick={onBack} className="text-blue-500 underline">
          Volver
        </button>
      </div>
    );

  return (
    <div className="block-detail">
      <h2 className="block-title">{block.titulo || "Bloque sin nombre"}</h2>
      <p className="block-notes">{block.notes || "Sin notas"}</p>

      {exercises.length > 0 ? (
        <ul className="exercise-list">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-item">
              {/* Renderización del video desde el estado */}
              <div className="exercise-video">
                {exerciseVideos[exercise.id] &&
                exerciseVideos[exercise.id].url ? (
                  <video
                    controls
                    className="video-player"
                    preload="metadata"
                    style={{ width: "100%", borderRadius: "8px" }}
                  >
                    <source
                      src={`${ENV.API_BASE_URL}${
                        exerciseVideos[exercise.id].url
                      }`}
                      type={exerciseVideos[exercise.id].mime || "video/mp4"}
                    />
                    Tu navegador no soporta la reproducción de este video.
                  </video>
                ) : (
                  <p>No hay video disponible para este ejercicio.</p>
                )}
              </div>

              {/* DETALLES */}
              <div className="exercise-details">
                {/* REPS */}
                <span className="exercise-reps">
                  {exercise.repeticiones || "N/A"} reps
                </span>

                {/* DIFICULTAD */}
                <span
                  className={`exercise-difficulty ${getDifficultyClass(
                    exercise.dificultad
                  )}`}
                >
                  {exercise.dificultad || "Principiante"}
                </span>

                {/* NOMBRE EJERCICIO */}
                <p className="exercise-name">
                  {exercise.nombre || "Ejercicio sin nombre"}
                </p>

                {/* CONTENEDOR */}
                <div className="container__series--carga">
                  {/* Icono de Series */}
                  <span className="exercise-series">
                    <Reorder style={{ marginRight: "5px" }} />{" "}
                    {/* Icono de series */}
                    {exercise.series || "N/A"}{" "}
                    {/* Mostramos las series o "N/A" */}
                  </span>

                  {/* Icono de Carga */}
                  <span className="exercise-carga">
                    <FitnessCenter style={{ marginRight: "5px" }} />{" "}
                    {/* Icono de carga */}
                    {exercise.carga || "N/A"} {/* Mostramos la carga o "N/A" */}
                  </span>

                  {/* Icono de Tiempo de Descanso */}
                  <span className="exercise-descanso">
                    <Timer style={{ marginRight: "5px" }} />{" "}
                    {/* Icono de tiempo de descanso */}
                    {exercise.descanso || "N/A"} s{" "}
                    {/* Mostramos el descanso en segundos o "N/A" */}
                  </span>

                  {/* TIEMPO DE BLOQUE */}

                  <span className="exercise-blockTime">
                    <AccessTimeIcon style={{ marginRight: "5px" }} />{" "}
                    {/* Icono de tiempo de descanso */}
                    {exercise.tiempoBloque || "N/A"} s{" "}
                    {/* Mostramos el descanso en segundos o "N/A" */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className="no-exercises-text">Este bloque no tiene ejercicios.</p>
      )}
    </div>
  );
};

export default BlockDetail;
