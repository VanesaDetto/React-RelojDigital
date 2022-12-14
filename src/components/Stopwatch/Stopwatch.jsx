import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="stopwatch">
      <h2>Cronometer</h2>
      <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button className="boton" onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button className="boton-stop" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className="boton-reset" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className="boton-resumen" onClick={() => setTimerOn(true)}>
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
