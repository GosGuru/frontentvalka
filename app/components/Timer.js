import React, { useState, useEffect } from "react";

const Timer = ({ initialTime, onTimeEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeEnd();
    }
  }, [time, onTimeEnd]);

  return (
    <div className="text-center mt-2 text-sm text-gray-600">
      <p>Tiempo de descanso: {time} segundos</p>
    </div>
  );
};

export default Timer;
