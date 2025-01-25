import React, { useState } from "react";
import Timer from "./Timer";

const ExerciseItem = ({ exercise }) => {
  const [seriesCompletadas, setSeriesCompletadas] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const completarSerie = () => {
    if (seriesCompletadas < exercise.series) {
      setSeriesCompletadas(seriesCompletadas + 1);
      setTimerActive(true); // Activa el temporizador al completar la serie
    }
  };

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <p className="text-lg font-bold text-gray-800 mb-2">
        {exercise.nombre || "Ejercicio sin nombre"}
      </p>
      <div className="text-gray-600 flex flex-wrap gap-2">
        <span className="text-sm flex items-center">
          <strong>Repeticiones:</strong> {exercise.repeticiones || "N/A"}
        </span>
        <span className="text-sm flex items-center">
          <strong>Series:</strong> {exercise.series || "N/A"}
        </span>
        <span className="text-sm flex items-center">
          <strong>Carga:</strong> {exercise.carga || "N/A"}
        </span>
      </div>
      <div className="text-gray-600 flex flex-wrap gap-2 mt-1">
        <span className="text-sm flex items-center">
          <strong>Descanso:</strong> {exercise.descanso || "N/A"} segundos
        </span>
        <span className="text-sm flex items-center">
          <strong>Tiempo de Bloque:</strong> {exercise.tiempoBloque || "N/A"} minutos
        </span>
      </div>

      {/* Contador de series */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-blue-600">
          Series completadas: {seriesCompletadas}/{exercise.series}
        </p>
        <button
          onClick={completarSerie}
          disabled={seriesCompletadas >= exercise.series || timerActive}
          className={`mt-2 px-4 py-2 text-white rounded-lg ${
            seriesCompletadas >= exercise.series
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {seriesCompletadas >= exercise.series
            ? "¡Series completadas!"
            : "Completar Serie"}
        </button>
      </div>

      {/* Temporizador */}
      {timerActive && (
        <Timer
          initialTime={exercise.descanso || 30}
          onTimeEnd={() => {
            setTimerActive(false); // Desactiva el temporizador al terminar
            alert(`¡Tiempo de descanso terminado para ${exercise.nombre}!`);
          }}
        />
      )}
    </div>
  );
};

export default ExerciseItem;
